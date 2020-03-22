'use strict'

class PlaceController {
  constructor() {
    this.places = []
  }

  viewPlace ({ view, params }) {
    return view.render('public.place-view',{ placeName: params.place });
  }

}

module.exports = PlaceController
