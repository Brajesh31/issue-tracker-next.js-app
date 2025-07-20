'use client';
import { ControllerRenderProps } from 'react-hook-form';
import SimpleMdeReact from 'react-simplemde-editor';

interface SimpleMDEProps {
  placeholder: string;
  fields: ControllerRenderProps<
    {
      title: string;
      description: string;
    },
    'description'
  >;
}

const SimpleMDE = ({ placeholder, fields }: SimpleMDEProps) => {
  const { ref, ...allProps } = fields;

  return <SimpleMdeReact placeholder={placeholder} {...allProps} />;
};

export default SimpleMDE;
