import { VariableEditorButton } from '@/components/buttons/VariableEditorButton';
import { HeadersEditorButton } from '@/components/buttons/HeadersEditorButton';

const DropDownMenus = () => {
  return (
    <div className="flex rounded-xl ml-11 mt-1 p-1 bg-gray-800">
      <VariableEditorButton />
      <HeadersEditorButton />
    </div>
  );
};

export { DropDownMenus };
