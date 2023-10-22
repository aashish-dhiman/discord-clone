import { Helmet } from "react-helmet";

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Helmet>
    );
};
MetaData.defaultProps = {
    title: "Discord | Your Place to Talk and Hang Out",
};

export default MetaData;
