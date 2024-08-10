import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import prisma from '@/lib/prisma';
import sharehouseRoute from '@/app/api/[[...route]]/routes/sharehouse.route';
import sharehousesRoute from '@/app/api/[[...route]]/routes/sharehouses.ruote';
import rotationRoute from '@/app/api/[[...route]]/routes/rotation.route';
import categoryRoute from '@/app/api/[[...route]]/routes/category.route';
import taskRoute from '@/app/api/[[...route]]/routes/task.route';
import tenantRoute from '@/app/api/[[...route]]/routes/tenant.route';
import assignmentsRoute from '@/app/api/[[...route]]/routes/assignments.route';
import { Session } from 'next-auth';
import { protectedRouteMiddleware } from '@/app/api/[[...route]]/middlewares/protected-route.middlware';
import {
  TPrismaCategory,
  TPrismaTask,
  TPrismaTenant,
  TSanitizedPrismaShareHouse,
} from '@/types/server';

export type THonoEnv = {
  Variables: {
    session: Session;
    sharehouses: TSanitizedPrismaShareHouse[];

    getRotationAssignmentBySharehouseId: (
      sharehouseId: string,
    ) => TSanitizedPrismaShareHouse['RotationAssignment'] | null;
    getAssignmentSheetBySharehouseId: (
      sharehouseId: string,
    ) => TSanitizedPrismaShareHouse['assignmentSheet'] | null;
    getSharehouseById: (id: string) => TSanitizedPrismaShareHouse | null;
    getCategoryById: (id: string) => TPrismaCategory | null;
    getTaskById: (id: string) => TPrismaTask | null;
    getTenantById: (id: string) => TPrismaTenant | null;
  };
};

const app = new Hono<THonoEnv>();

const routes = app
  .basePath('/api')

  /**
   * Public routes that do not require the user to be logged in.
   */
  .route('/assignments', assignmentsRoute)

  /**
   * Protected routes that require the user to be logged in.
   */
  .use(protectedRouteMiddleware)
  .route('/sharehouse', sharehouseRoute)
  .route('/sharehouses', sharehousesRoute)
  .route('/rotation', rotationRoute)
  .route('/category', categoryRoute)
  .route('/task', taskRoute)
  .route('/tenant', tenantRoute)

  /**
   * This is a test route to check if the user is logged in.
   * TODO: Remove this route before deploying to production.
   */
  .get('/whoami', async (c) => {
    const landlord = await prisma.landlord.findUnique({
      where: { id: c.get('session').user.id },
    });

    return c.json({
      message: 'You are logged in!',
      session: c.get('session'),
      landlord,
    });
  });

/**
 * Expose the type of the api routes.
 */
export type AppType = typeof routes;

/**
 * Expose HTTP methods for the app.
 */
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
