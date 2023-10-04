/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface AvatarProps {
  image: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  isBordered?: boolean;
  rounded?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  size = 'medium',
  className = '',
  isBordered = false,
  rounded = false,
}) => {
  const avatarSizeClass = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  }[size];

  const avatarStyle = `
    ${avatarSizeClass}
    ${isBordered ? `border-2` : ''}
    ${rounded ? 'rounded-full' : 'rounded'}
  `;

  return (
    <div
      className={`flex items-center justify-center  ${avatarStyle} ${className}`}
    >
      <img src={image} alt="Avatar" className="object-cover w-full h-full rounded-full" />
    </div>
  );
};

export default Avatar;
