export interface Sale {
  image: string,
  uname: string,
  gmail: string,
  productName: string,
  status: string,
  weeks: number,
  budget: string
}

export const TopSelling: Sale[] = [

  {
      image: 'assets/img/user1.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Flexy React',
      status: 'danger',
      weeks: 35,
      budget: '95K'
  },
  {
      image: 'assets/img/user2.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Landing pro React',
      status: 'info',
      weeks: 35,
      budget: '95K'
  },
  {
      image: 'assets/img/user3.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Elite React	',
      status: 'warning',
      weeks: 35,
      budget: '95K'
  },
  {
      image: 'assets/img/user4.jpg',
      uname: 'Hanna Gover',
      gmail: 'hgover@gmail.com',
      productName: 'Ample React',
      status: 'success',
      weeks: 35,
      budget: '95K'
  },

]
