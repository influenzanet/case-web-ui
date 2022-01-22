import React, { useState } from 'react';
import { AvatarConfig } from '../../types/avatars';
import { Profile } from '../../types/profile';
import { ReportCard } from '../cards';
import { ReportDetailDialog } from '../dialogs';
import { AlertBox, MarkdownRenderer } from '../displays';

interface ReportDisplayProps {
  timestamp: number;
  reportName: string;
  studyName?: string;
  cardIcon?: string;
  subtitle: string;
  profile?: Profile;
  summary?: string;
  data: Array<{
    label?: string;
    value: string;
    useMarkdown?: boolean;
  }>;
}

interface ReportListProps {
  className?: string;
  texts: {
    title: string;
    subtitle?: string;
    infoParagraph?: string;
    emptyList: string;
    cardActionBtn: string;
    detailDialog: {
      title: string;
      closeBtn: string;
    }
  }
  cardBgOverride?: string;
  reports: Array<ReportDisplayProps>;
  avatars: Array<AvatarConfig>;
}

const ReportList: React.FC<ReportListProps> = (props) => {
  const [selectedReport, setSelectedReport] = useState<undefined | ReportDisplayProps>();

  return (
    <div className={props.className}>
      <div className="border-primary border-top-2 pt-2 mb-2">
        <h2 className="m-0">
          {props.texts.title}
        </h2>
        {props.texts.subtitle ? <h3 className="m-0 text-grey-5">
          {props.texts.subtitle}
        </h3> : null}
      </div>
      {props.texts.infoParagraph ? <div className="pb-1a"><MarkdownRenderer
        markdown={props.texts.infoParagraph} /></div> : null}
      <div className="mt-1a">
        {props.reports === undefined || props.reports.length < 1 ? <AlertBox
          type='info'
          content={props.texts.emptyList}
        /> : null}
        {
          props.reports.map((r, i) => <ReportCard
            key={i.toFixed()}
            reportID={''}
            bgClassNameOverride={props.cardBgOverride}
            cardInfos={{
              ...r,
              actionBtnText: props.texts.cardActionBtn,
            }}
            avatars={props.avatars}
            onClick={() => setSelectedReport(r)}
          />)
        }
      </div>
      {selectedReport !== undefined ? <ReportDetailDialog
        open={selectedReport !== undefined}
        dialogTexts={props.texts.detailDialog}
        reportInfos={selectedReport}
        avatars={props.avatars}
        onClose={() => setSelectedReport(undefined)}
      /> : null}

    </div>
  );
};

export default ReportList;
