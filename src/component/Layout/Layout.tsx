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
        <div>
            {navbar}
            {mainContent}
            {footer}
        </div>
        </>
    );
}