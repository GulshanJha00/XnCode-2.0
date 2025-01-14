import React from 'react';
import Link from 'next/link';

interface Props {
  name: string;
  link: string;
  style?: React.CSSProperties;
}

const Button = (props: Props) => {
  return (
    <div>
      <Link
        style={{
          fontWeight: 700,
          fontSize: '16px',
          borderRadius: '10px',
          fontFamily: 'Itim',
          cursor: 'pointer',
          ...props.style,
        }}
        href={props.link}
      >
        {props.name}
      </Link>
    </div>
  );
};

export default Button;
