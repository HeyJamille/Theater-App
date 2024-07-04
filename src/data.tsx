interface Movie {
    title: string;
    description: string;
    times: string[];
    image: string;
  }
  
  export const filmesDestaque: Movie[] = [
    {
      title: 'Parasite',
      description: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks.',
      times: ['3:30 PM', '6:00 PM', '8:30 PM'],
      image: './images/parasite.png'
    },
    {
      title: 'Frozen II',
      description: 'Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest.',
      times: ['11:00 AM', '2:00 PM', '4:00 PM'],
      image: './images/frozen.png'
    },
    {
      title: 'Weathering with You',
      description: 'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to change the weather.',
      times: ['1:45 PM', '4:00 PM', '6:15 PM'],
      image: './images/wheathering-with-you.png'
    },
    {
      title: 'Midway',
      description: 'The historic story of the Battle of Midway, told by the leaders and the sailors who fought it.',
      times: ['12:30 PM', '2:45 PM', '5:30 PM'],
      image: './images/mindway.png'
    }
  ];
  
  export const filmesEmBreve: Movie[] = [
    {
      title: 'Knives Out',
      description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
      times: [],
      image: '/images/knives-out.png'
    },
    {
      title: 'Ford v Ferrari',
      description: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford.',
      times: [],
      image: '/images/ford-v-ferrari.png'
    }
  ];
  
  export const filmesAssistidosRecentemente: Movie[] = [
    {
      title: 'Charlies Angels',
      description: 'When a young systems engineer blows the whistle on a dangerous technology, Charlie\'s Angels are called into action.',
      times: [],
      image: '/images/charlies-angels.png'
    },
    {
      title: 'A Beautiful Day in the Neighborhood',
      description: 'Based on the true story of a real-life friendship between Fred Rogers and journalist Tom Junod.',
      times: [],
      image: '/images/a-beautiful-day.png'
    }
  ];
  
  export const filmesSobDemanda: Movie[] = [
    {
      title: 'Weathering with You',
      description: 'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to change the weather.',
      times: [],
      image: '/images/wheathering-with-you.png'
    },
    {
      title: 'The Good Liar',
      description: 'Consummate con man Roy Courtnay has set his sights on his latest mark: the recently widowed Betty McLeish, worth millions.',
      times: [],
      image: '/images/the-good-lier.png'
    }
  ];
  