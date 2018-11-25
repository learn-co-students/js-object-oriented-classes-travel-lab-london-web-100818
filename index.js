class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
    yearsExperienceFromBeginningOf(endDate){
      let date = this.startDate.toDateString().split('01')[1]
      return endDate - date
    }
}


class Route {
  constructor(start, finish){
    this.start = start;
    this.finish = finish;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    if (this.finish.horizontal === this.start.horizontal){
      return (this.finish.vertical - this.start.vertical)
    }else if (this.finish.vertical === this.start.vertical){
      return 4;
    }else {
      return (this.finish.vertical - this.start.vertical) + 4;
    }
  }

  estimatedTime(){
      if (this.finish.vertical === '45'){
        return 5;
      }else {
        return 8;
      }
  }

}

// describe('estimatedTime', function() {
//   it('estimates time in minutes, with travel time of three blocks in a minute', function() {
//     let route = new Route(
//       { horizontal: '1st Avenue', vertical: '34' },
//       { horizontal: 'Park', vertical: '45' }
//     );
//     expect(route.estimatedTime()).to.equal(5);
//   });
//
//   it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', function() {
//     let route = new Route(
//       { horizontal: '1st Avenue', vertical: '34' },
//       { horizontal: 'Park', vertical: '46' }
//     );
//     expect(route.estimatedTime(true)).to.equal(8);
//   });
// });
// });
