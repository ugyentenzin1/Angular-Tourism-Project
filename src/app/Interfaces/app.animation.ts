import {trigger, animate, transition, style, group, query, state} from "@angular/animations";

export const routingAnimation = trigger('slideAnimation', [
  transition('*<=>*', [
    query(':enter, :leave', style({
       position:'absolute',width: '100%', zIndex: 2, background: 'white'
    }), {optional: true}),
    group([
      query(':enter', [
        style({
          transform: 'translateY(100%)',
        }),
        animate('0.5s ease', style({transform: 'translateY(0%)'}))
      ], {optional: true}),

      query(':leave', [
        style({transform:'translateY(0%)'}),
        animate('0.7s ease', style({transform: 'translateY(100%)'}))
      ],{optional: true})
    ])
  ])
])
