import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";
import { LocalGithubUser } from "../../types/users";

import styles from "./usercontact.module.css";
import ContactItem, { ContactItemProps } from "./ContactItem";

interface UserContactProps
  extends Pick<LocalGithubUser, "company" | "location" | "twitter" | "blog"> {}

const UserContact = ({
  company,
  location,
  blog,
  twitter,
}: UserContactProps) => {
  //*Порядок отображаемых элементов

  //? items это массив, который будет содержать в себе нужные нам props
  //? ContactItem - интерфейс пропсов
  const items: ContactItemProps[] = [
    { icon: <LinkIcon />, text: blog },
    { icon: <LocationOnIcon />, text: location },
    { icon: <TwitterIcon />, text: twitter },
    { icon: <BusinessIcon />, text: company },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <ContactItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserContact;
