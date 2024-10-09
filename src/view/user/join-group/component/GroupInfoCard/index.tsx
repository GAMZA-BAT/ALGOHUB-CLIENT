import tmpSrc from "@/asset/img/alogohub_icon.png";
import { IcnGroupInfoCard } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import type { GroupJoinResponse } from "@/view/user/join-group/api/type";
import GroupDateInfo from "@/view/user/join-group/component/GroupInfoCard/GroupDateInfo";
import {
  descStyle,
  groupNameStyle,
  infoCardWrapper,
  infoWrapper,
} from "@/view/user/join-group/component/GroupInfoCard/index.css";

const GroupInfoCard = ({ groupInfo }: { groupInfo: GroupJoinResponse }) => {
  const { name, startDate, endDate, description } = groupInfo;
  return (
    <article className={infoCardWrapper}>
      <IcnGroupInfoCard width={246} height={341} />
      <div className={infoWrapper}>
        <Avatar src={tmpSrc} alt={`${name} 그룹 사진`} size="large" />
        <h1 className={groupNameStyle}>{name}</h1>
        <GroupDateInfo startDate={startDate} endDate={endDate} />
        <p className={descStyle}>{description}</p>
      </div>
    </article>
  );
};

export default GroupInfoCard;