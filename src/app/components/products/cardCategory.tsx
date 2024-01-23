interface Props {
  thumb_src: string;
  title: string;
  collection: string;
}

export default function CardCategory({
  thumb_src,
  title,
  collection,
}: Props) {

  return (
    <>
      <a href="#">
        <div
          className={`mb-4`}
        >
          <div
            className="full-background"
            style={{
              backgroundImage: `url(${`${
                "import.meta.env.BASE_URL"
              }${thumb_src}`})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className={""}>
            <div className="d-block mt-10">
              <p className="text-white font-weight-bold mb-1">{collection}</p>
              <h4 className="text-white font-weight-bolder">{title}</h4>
              <a
                href="#"
                className="text-white text-sm font-weight-semibold mb-0"
              >
                See products &#62;
              </a>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
