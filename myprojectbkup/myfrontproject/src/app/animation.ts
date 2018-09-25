import {trigger,animate,transition,style,query} from '@angular/animations';
  
  export const fadeAnimation = trigger('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    transition('* => *', [
      // The query function has three params.
      // First is the event, so this will apply on entering or when the element is added to the DOM.
      // Second is a list of styles or animations to apply.
      // Third we add a config object with optional set to true, this is to signal
      // angular that the animation may not apply as it may or may not be in the DOM.
      query(
        ':enter',
        [style({ opacity: 0 ,transform: 'translateX(-100%)'})],
        { optional: true }
      ),
      query(
        ':leave',
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [ animate('0.5s ease-in', style({ transform: 'translateX(+100%)'}))],
        { optional: true }
      ),
      query(
        ':enter',
        [ animate('0.5s ease-in', style({ transform: 'translateX(0%)'}))],
        { optional: true }
      )
    ])
  ]);
   