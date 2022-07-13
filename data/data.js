export const data = [
  {
    num: 54,
    patient: 'Взрослый',
    image: '/img/parent.png',
    description: {
      firstBlock: 'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
      secondBlock: 'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
      thirdBlock: 'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.'
    }
  },
  {
    num: 23,
    patient: 'Ребёнок',
    image: '/img/child.png',
    description: {
      firstBlock: 'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
      secondBlock: 'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания.'
    }
  }
]

export const circles = {
  topRow: {
    className: 'topRow',
    data: [
      {
        num: 10,
        id: 'tired',
        image: '/img/icons/tiredness.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Утомляемость'
      },
      {
        num: 4,
        id: 'salute',
        image: '/img/icons/salute.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Ограниченная способность поднимать руки и переносить предметы'
      }
    ]
  },
  middleRow: {
    className: 'middleRow',
    data: [
      {
        num: 9,
        id: 'have',
        image: '/img/icons/havenoidea.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Вывих бедра'
      },
      {
        num: 5,
        id: 'head',
        image: '/img/icons/head.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Нарушения жевания и глотания'
      }
    ]
  },
  bottomRow: {
    className: 'bottomRow',
    data: [
      {
        num: 8,
        id: 'bones',
        image: '/img/icons/bones.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Контрактура суставов'
      },
      {
        num: 6,
        id: 'lungs',
        image: '/img/icons/lungs.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Дыхательная недостаточность/респираторная дисфункция'
      }
    ]
  },
  column: {
    className: 'column',
    data: [
      {
        num: 3,
        id: 'scoliosis',
        image: '/img/icons/scoliosis.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Сколиоз'
      },
      {
        num: 7,
        id: 'legs',
        image: '/img/icons/legs.png',
        medicIcon: '/img/icons/plus.png',
        message: 'Неспособность бегать, изменение походки'
      }
    ]
  }
}
