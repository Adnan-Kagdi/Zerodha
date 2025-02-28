import "./Sections.css"

function LeftSection(
    {
        ImageUrl,
        Title,
        Description,
        TryDemo,
        LearnMore,
        GooglePlayIcon,
        AppStoreIcon
    }) {

    return (
        <div className="container mb-0 pl-0">
            <div className=" cont-row row offset-1">
                <div className="cont-colL col-6 p-0">
                    <img src={ImageUrl} className="p-0" />
                </div>
                <div className="col-1">
                </div>
                <div className="cont-colL col-4" style={{ paddingLeft: "4rem", marginTop: "2.5rem", fontSize: "1.05rem", lineHeight: "1.7rem" }}>
                    <h2 className="mb-4" style={{ color: "#424242" }}>{Title}</h2>
                    <p style={{ color: "#424242" }}>{Description}</p>
                    <div className="anc">
                        <a href="" style={{ textDecoration: "none", color: "#387ED1" }}>{TryDemo}</a>
                        <a href="" className="ms-5" style={{ textDecoration: "none", color: "#387ED1" }}>{LearnMore}</a>
                    </div>
                    <div className="anc d-flex mt-4">
                        <img src={GooglePlayIcon} className="p-0" />
                        <img src={AppStoreIcon} className="p-0 ms-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;