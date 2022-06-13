import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import fs from "fs";
import path from "path";

class CustomNextHead extends Head {
    // TODO: This might not be needed if Next.js implements built-in support
    // https://github.com/zeit/next-plugins/issues/364
    getCssLinks({ allFiles }: any) {
        return allFiles
            .filter((file: any) => file.endsWith(".css"))
            .map((file: any) => (
                <style
                    key={file}
                    nonce={this.props.nonce}
                    dangerouslySetInnerHTML={{
                        __html: fs.readFileSync(
                            path.join(".next", file),
                            "utf-8"
                        ),
                    }}
                />
            ));
    }
}

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage;

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App: any) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component: any) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <CustomNextHead />
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
