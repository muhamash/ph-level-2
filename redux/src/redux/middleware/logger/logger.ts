export const logger = ( state: { getState: () => any; } ) => ( next ) => ( action ) =>
{
    console.log( state.getState() )
    console.log( action );

    next(action)
}