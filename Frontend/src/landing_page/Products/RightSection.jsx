import "./Sections.css"

function RightSection({
    ImageUrl,
    Title,
    Description,
    LearnMore
}) {
    return (
        <div className="container cont1" style={{ marginBottom: "2rem" }}>
            <div className="cont-row row m-2">
                <div className="cont-colR1 col-4" style={{ paddingLeft: "5rem", marginTop: "auto", marginBottom: "auto", fontSize: "1.05rem", lineHeight: "1.7rem" }}>
                    <h2 className="mb-4" style={{ color: "#424242" }}>{Title}</h2>
                    <p style={{ color: "#424242" }}>{Description}</p>
                    <div className="anc mt-3">
                        <a href="" style={{ textDecoration: "none", color: "#387ED1" }}>{LearnMore}</a>
                    </div>
                </div>
                {/* <div className="col-1">
                </div> */}
                <div className="cont-colR2 col-6 p-0">
                    <img src={ImageUrl} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;