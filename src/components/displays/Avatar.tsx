import React from 'react';
import clsx from 'clsx';
import { getExternalOrLocalContentURL } from '../../utils/routeUtils';
import { AvatarConfig } from '../../types/avatars';


interface AvatarProps {
  avatarId: string;
  size?: string;
  className?: string;
  avatars: Array<AvatarConfig>;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const getUrl = (id: string): string => {
    const index = props.avatars.findIndex(a => a.avatarId === id);
    const url = index < 0 ? props.avatars.find(a => a.avatarId === 'default')?.url : props.avatars[index].url;

    return getExternalOrLocalContentURL(url ? url : 'default.png');
  }

  const size = props.size ? props.size : 28;
  return (
    <img
      alt="avatar"
      src={getUrl(props.avatarId)}
      className={clsx("d-inline-block bg-white text-body overflow-hidden", props.className)}
      width={size}
    />
  );
};

export default Avatar;
