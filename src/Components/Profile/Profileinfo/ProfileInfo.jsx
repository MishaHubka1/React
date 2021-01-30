import s from './Profileinfo.module.css';
const ProfileInfo = (props) => {

    if (!props.profile ) {
        return <preloader />
    }

  return (
    <div>
      <div>
        <img src='https://ondinas.com.br/site/wp-content/themes/options/images/skins/headers/full_width/header-midnightBlue.jpg' />
      </div>
      <div className={s.descripshionBlock}>
       <img src = {props.profile.photos.large} />
        ava + descripshion
    </div>
    </div>
   
  )
}

export default ProfileInfo;