import s from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWhithHooks from './ProfileStatusWithHooks';
const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile ) {
        return <preloader />
    }

  return (
    <div>
      <div className={s.descripshionBlock}>
       <img src = {profile.photos.large} />
        <ProfileStatusWhithHooks status={status} updateStatus={updateStatus} />
    </div>
    </div>
  )
}

export default ProfileInfo;