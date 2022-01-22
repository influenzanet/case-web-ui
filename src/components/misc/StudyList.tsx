import React from 'react';
import { AvatarConfig } from '../../types/avatars';
import StudyCard, { StudyCardDetails } from '../cards/StudyCard';
import { AlertBox, MarkdownRenderer } from '../displays';


interface StudyListProps {
  className?: string;
  texts: {
    title: string;
    infoParagraph?: string;
    infoAlert?: string;
    cardOpenAction: string;
    cardNotJoined: string;
  }
  studyCards: Array<StudyCardDetails>;
  selectedLanguage: string;
  avatars: Array<AvatarConfig>;
  openStudy: (studyKey: string) => void;
}

const StudyList: React.FC<StudyListProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="border-primary border-top-2 pt-2 mb-2">
        <h2 className="m-0">
          {props.texts.title}
        </h2>
      </div>
      {props.texts.infoAlert ? <AlertBox
        className="mb-1a"
        type="info"
        content={props.texts.infoAlert} /> : null}
      {props.texts.infoParagraph ? <div className="pb-1a"><MarkdownRenderer
        markdown={props.texts.infoParagraph} /></div> : null}
      <div className="mt-n1a">
        {
          props.studyCards.map(study => <StudyCard
            key={study.studyKey}
            details={study}
            notJoinedText={props.texts.cardNotJoined}
            actionText={props.texts.cardOpenAction}
            avatars={props.avatars}
            selectedLanguage={props.selectedLanguage}
            onClick={props.openStudy}
          />)
        }
      </div>
    </div>
  );
};

export default StudyList;
