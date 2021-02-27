import clsx from 'clsx';
import React from 'react';
import { AvatarConfig } from '../../types/avatars';
import Avatar from '../displays/Avatar';
import styles from './AvatarSelector.module.scss';


interface AvatarSelectorProps {
  className?: string;
  selectedAvatarId: string;
  avatars: Array<AvatarConfig>;
  onSelectAvatar: (avatarId: string) => void;
  title: string;
}

const AvatarSelector: React.FC<AvatarSelectorProps> = (props) => {
  return (
    <div className={props.className}>
      <label
        className="form-label m-0"
      >{props.title}</label>

      <div className="d-flex flex-wrap justify-content-start">
        {props.avatars.map(avatar =>
          <div key={avatar.avatarId}
            onClick={() => {
              props.onSelectAvatar(avatar.avatarId)
            }}
            className={clsx("mt-1a me-1a",
              "position-relative",
              "cursor-pointer",
              "border-primary",
              styles.avatar,
              {
                [styles.selected]: props.selectedAvatarId === avatar.avatarId
              }
            )}
            style={{ maxWidth: 50 }}>
            <Avatar
              size="100%"
              avatarId={avatar.avatarId}
              avatars={props.avatars}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarSelector;
