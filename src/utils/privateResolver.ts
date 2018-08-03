const privateResolver = resolverFunction => async (
  parent,
  args,
  context,
  info
) => {
  if (!context.req.user) {
    throw new Error('There is no JWT, so we can not proceed anymore.');
  }
  return await resolverFunction(parent, args, context, info);
};

export default privateResolver;
