
const ProfilePage = () => {
    return (
      <>
        <div className="profile-card">
  <img src="img/anh dai dien.jpg" alt="Avatar" className="profile-picture" />
  <h1 className="name">Lê Chí Lương</h1>
  <p>19/10/2002</p>
  <p className="job-title">Sinh viên thiết kế website</p>
  <p className="location" />
  <p className="email">Ngôn ngữ đã học : JS,C++</p>
  <div className="card__social">
    <a target="_black" href="https://www.facebook.com/chiluong02/">
      <i className="fab fa-facebook-f" />
    </a>
    <a target="_black" href="https://www.instagram.com/cluog1910_/">
      <i className="fab fa-instagram-square" />
    </a>
    <a target="_black" href="https://github.com/luonglcph19131">
      <i className="fab fa-github" />
    </a>
  </div>
</div>
</>
    );
}

export default ProfilePage