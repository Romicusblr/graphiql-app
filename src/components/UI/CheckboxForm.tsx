import { useLocalization } from '@/hooks/localization';
import React, { FC } from 'react';

interface PropType {
  checked: boolean;
  onChange: () => void;
}

const CheckboxForm: FC<PropType> = ({ checked, onChange }) => {
  const { strings } = useLocalization();
  return (
    <label
      htmlFor="show-password"
      className="block mt-2 text-xs font-bold text-gray-400 cursor-pointer"
    >
      <input
        type="checkbox"
        name="show-password"
        id="show-password"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      {checked ? `${strings.hidePassword}` : `${strings.showPassword}`}
    </label>
  );
};

export default CheckboxForm;
