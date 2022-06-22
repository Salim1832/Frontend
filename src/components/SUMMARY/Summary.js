import StyledSummary from "./Summar.syled";


function Summary(props) {

    const {title, summary} = props;

    return(
        <StyledSummary>            
            <section>
            <h1>SUMMARY</h1>
            <p>{title}</p>
            <img src={summary} alt="" />
            </section>
        </StyledSummary>
    )
        
};

export default Summary;

