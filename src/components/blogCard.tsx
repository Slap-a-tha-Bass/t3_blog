import Link from 'next/link';

interface BlogCardProps {
  name: string;
  description: string;
  link?: string;
  isLink?: boolean;
  urlSegment?: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark';
}

export default function BlogCard({
  name,
  description,
  variant,
  link,
  isLink,
  urlSegment,
}: BlogCardProps) {
  return (
    <div>
      {isLink ? (
        <div className={`card-${variant}`}>
          <h2 className={`card-title-${variant}`}>{name}</h2>
          <p className={`card-description-${variant}`}>{description}</p>
          {link && (
            <Link
              href={`/${
                urlSegment
                  ? urlSegment.split(' ').join('-').toLocaleLowerCase()
                  : ''
              }/${link.split(' ').join('-').toLocaleLowerCase()}`}
            >
              <a className={`card-link-${variant}`}>{link}</a>
            </Link>
          )}
        </div>
      ) : (
        <div className={`card-${variant}`}>
          <h2 className={`card-title-${variant}`}>{name}</h2>
          <p className={`card-description-${variant}`}>{description}</p>
        </div>
      )}
    </div>
  );
}
