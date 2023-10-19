import Header from "@/components/Shared/Header";


const NotFoundPage = () => {
    return (
        <div>
            <div className="h-20 bg-slate-900">
            <Header></Header>
            </div>

        <div className="h-screen flex items-center justify-center">
            <h1 className="text-5xl font-semibold">404 Page Not Found</h1>
        </div>
        </div>
    );
};

export default NotFoundPage;