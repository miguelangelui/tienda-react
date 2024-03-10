const LoginTemplate = ({ children, title }) => {
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container m-auto py-12 px-6 h-full">
            <div className="flex flex-col justify-center items-center h-full g-6 text-gray-800">
                <h4 className="text-xl font-semibold mt-1 mb-8 pb-1">
                    { title }
                </h4>
                { children }
                <div>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LoginTemplate;
