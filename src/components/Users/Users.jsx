import styles from './User.module.css';
import Button from '@mui/material/Button';

let Users = (props) => {
  // if (props.Users.length === 0) {
  //   props.setUsers([
  //     {
  //       id: 1,
  //       followed: true,
  //       fullName: 'Igor',
  //       status: 'boss',
  //       location: { city: 'Chelyabinsk', country: 'Russia' },
  //       photoUrl:
  //         'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
  //     },
  //     {
  //       id: 2,
  //       followed: true,
  //       fullName: 'Dima',
  //       status: 'Pre intermediate boss',
  //       location: { city: 'Chertanovo', country: 'San Francisco' },
  //       photoUrl:
  //         'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
  //     },
  //     {
  //       id: 3,
  //       followed: false,
  //       fullName: 'nobody',
  //       status: 'sos',
  //       location: { city: 'miasskoe', country: 'England' },
  //       photoUrl:
  //         'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
  //     },
  //   ]);
  // }
  return (
    <div>
      {props.Users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <img src={el.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {el.followed ? (
                <Button
                  onClick={() => {
                    props.unFollow(el.id);
                  }}
                  variant='contained'
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                  variant='contained'
                >
                  follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{el.fullName}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{el.location.country}</div>
              <div>{el.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
