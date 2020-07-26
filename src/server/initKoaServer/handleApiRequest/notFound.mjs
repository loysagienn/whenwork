const notFound = async (koaCtx) => {
    koaCtx.status = 404;

    koaCtx.body = {
        status: 'ERROR',
        error: 'NOT_FOUND',
        data: {
            message: 'Страница не найдена',
        },

    };
};

export default notFound;
