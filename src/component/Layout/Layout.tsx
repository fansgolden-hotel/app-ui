import "./LayoutStyle.scss";


type LayoutProps = {
    navbar: React.ReactNode;
    mainContent: React.ReactNode;
    footer: React.ReactNode;
};

export default function Layout({
    navbar,
    mainContent,
    footer
}: LayoutProps) {
    return (
        <>
            <div id="content">
                {navbar}
                {mainContent}
                {footer}
            </div>
            <div id="unsupported">
                Device not supported
            </div>
        </>
    );
}