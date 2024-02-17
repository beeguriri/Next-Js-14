import RecommendUser from './RecommendUser';
import style from './followRecommendSection.module.css';

export default function FollowRecommendSection() {
  return (
    <div>
      <div className={style.followRecommend}>
          <h3>팔로우 추천</h3>
          <RecommendUser />
          <RecommendUser />
          <RecommendUser />
      </div>
    </div>
  );
}