import styles from "./contactiten.module.css";
export interface ContactItemProps {
  icon: React.ReactNode;
  isLink?: boolean;
  text?: string | null;
}
const ContactItem = ({ isLink, text, icon }: ContactItemProps) => {
  const receivedText = text || "Not Available";
  let receiveHref = "";
  if (isLink) {
    //* Проверяем, прийдет  нам ссылка или текст
    receiveHref = text && text.startsWith("http") ? text : `https://${text}`;
  }
  return (
    <div className={`${styles.infoItem}${text ? "" : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={receiveHref}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {receivedText}
          </a>
        ) : (
          receivedText
        )}
      </div>
    </div>
  );
};

export default ContactItem;
