import { AccordionAssignmentSheet } from '@/components/accordion-assignment-sheet/AccordionAssignmentSheet';
interface IAssignmentSheetPageProps {
  params: {
    assignment_sheet_id: string;
    tenant_id: string;
  };
}

const AssignmentSheetPage = ({
  params: { assignment_sheet_id, tenant_id },
}: IAssignmentSheetPageProps) => {
  console.log(
    `Assignment Sheet ID: ${assignment_sheet_id}, Tenant ID: ${tenant_id}`,
  );

  const rotationData = {
    rotations: {
      // rotation 1
      1: {
        startDate: '12/1',
        endDate: '12/7',
        categories: [
          {
            id: '48e5edd4-8960-4be4-8b4c-86c8c31cb8f1',
            name: 'Cleaning',
            tasks: [
              {
                id: 'd7bd18d4-60c9-4fb7-b420-3139ed8cde64',
                title: 'Clean the kitchen',
                description:
                  '<p>Ensure the <strong>kitchen</strong> is</p><p><strong>clean</strong> and <u>tidy</u>.</p>',
                isCompleted: false,
              },
              {
                id: 'a7bd18d4-60c9-4fb7-b420-3139ed8cde64',
                title: 'Sample title',
                description:
                  '<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mollis nisi.</strong></p><p></p><p><u>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</u></p><p><strong>Nulla eget odio in nulla euismod commodo et sed mauris.</strong></p><p></p><ul class="list-disc pl-6"><li class="[&amp;>p]:inline"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></li><li class="[&amp;>p]:inline"><p><u>Praesent eget lorem volutpat, dignissim purus sit amet, posuere nisl.</u></p></li><li class="[&amp;>p]:inline"><p>Aenean at ante ornare, congue neque id, consectetur elit.</p></li></ul><p></p><ol class="list-decimal pl-6"><li class="[&amp;>p]:inline"><p>In auctor neque quis porta venenatis.</p></li><li class="[&amp;>p]:inline"><p>Fusce sed ex eget sapien tristique tincidunt.</p></li></ol>',
                isCompleted: false,
              },
            ],
          },
        ],
      },

      // rotation 2
      2: {
        startDate: '12/8',
        endDate: '12/14',
        categories: [
          {
            id: '545ea4fe-83e1-4fb9-825e-408a03fd7fc0',
            name: 'Gardening',
            tasks: [
              {
                id: '1cee1481-5be6-41c1-b5e1-7e68a72d8177',
                title: 'Weed the garden',
              },
            ],
          },
        ],
      },
      // rotation 3
      3: {
        startDate: '12/15',
        endDate: '12/21',
        categories: [
          {
            id: '545ea4fe-83e1-4fb9-825e-408a03fd7fca',
            name: 'TEST',
            tasks: [
              {
                id: '1cee1481-5be6-41c1-b5e1-7e68a72d817a',
                title: 'TASK',
              },
            ],
          },
        ],
      },
      // rotation 4
      4: {
        startDate: '12/22',
        endDate: '12/28',
        categories: [],
      },
    },
  };

  return (
    <>
      <header className="bg-primary text-white">
        <div className="flex items-center h-14 py-4 px-4 text-xl">
          Your Tasks
        </div>
      </header>

      <div className="px-6">
        <AccordionAssignmentSheet rotationData={rotationData} />
      </div>
    </>
  );
};

export default AssignmentSheetPage;
