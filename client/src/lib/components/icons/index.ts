export const Icon = ({ iconName, className }) => {
  switch (iconName) {
    case 'wifi':
      return <WifiIcon className={className} />;
    case 'tv':
      return <TvIcon className={className} />;
    case 'washingMachine':
      return <WashingMachine className={className} />;
    case 'fridge':
      return <FridgeIcon className={className} />;
    default:
      <></>;
  }
};

export const LocationIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
};

export const WifiIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
      />
    </svg>
  );
};

export const WashingMachine = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 424.166 424.166"
    >
      <g>
        <path d="M360.083,0h-296c-17.645,0-32,14.355-32,32v384.166c0,4.418,3.582,8,8,8h344c4.418,0,8-3.582,8-8V32   C392.083,14.355,377.728,0,360.083,0z M48.083,408.166V80H320.25c4.418,0,8-3.582,8-8s-3.582-8-8-8H48.083V32   c0-8.822,7.178-16,16-16h296c8.822,0,16,7.178,16,16v32h-23.75c-4.418,0-8,3.582-8,8s3.582,8,8,8h23.75v328.166H48.083z" />
        <path d="M212.083,112.005c-72.966,0-132.329,59.362-132.329,132.328s59.362,132.328,132.329,132.328   c72.966,0,132.328-59.362,132.328-132.328S285.049,112.005,212.083,112.005z M212.083,360.661   c-64.144,0-116.329-52.185-116.329-116.328s52.185-116.328,116.329-116.328c48.707,0,90.511,30.094,107.815,72.661h-7.315   c-3.419,0-6.712,0.545-9.803,1.542c-16.255-34.945-51.646-57.87-90.697-57.87c-55.138,0-99.995,44.857-99.995,99.995   s44.857,99.995,99.995,99.995c39.052,0,74.442-22.925,90.697-57.87c3.091,0.997,6.384,1.542,9.803,1.542h7.315   C302.594,330.567,260.79,360.661,212.083,360.661z M303.671,269.28c-0.152-0.123-0.311-0.239-0.473-0.35   c-3.999-2.911-6.614-7.615-6.614-12.93v-23.334c0-5.314,2.615-10.018,6.614-12.93c0.162-0.112,0.321-0.228,0.473-0.35   c2.549-1.716,5.615-2.72,8.912-2.72h12.495c2.172,8.871,3.333,18.135,3.333,27.667s-1.161,18.796-3.333,27.667h-12.495   C309.286,272,306.219,270.996,303.671,269.28z M289.15,277.761c-13.224,30.451-43.539,50.567-77.067,50.567   c-46.315,0-83.995-37.68-83.995-83.995s37.68-83.995,83.995-83.995c33.528,0,63.843,20.116,77.067,50.567   c-5.311,5.715-8.567,13.363-8.567,21.761V256C280.583,264.398,283.839,272.046,289.15,277.761z" />
        <path d="M344.083,40.083c0-8.776-7.141-15.917-15.917-15.917s-15.916,7.141-15.916,15.917S319.39,56,328.166,56   S344.083,48.859,344.083,40.083z" />
        <path d="M280.5,24.166c-8.776,0-15.917,7.141-15.917,15.917S271.724,56,280.5,56s15.916-7.141,15.916-15.917   S289.276,24.166,280.5,24.166z" />
        <path d="M152.416,32.083h-72c-4.418,0-8,3.582-8,8s3.582,8,8,8h72c4.418,0,8-3.582,8-8S156.834,32.083,152.416,32.083z" />
        <path d="M199.75,32.083h-15.417c-4.418,0-8,3.582-8,8s3.582,8,8,8h15.417c4.418,0,8-3.582,8-8S204.168,32.083,199.75,32.083z" />
        <path d="M212.083,176.005c-37.677,0-68.329,30.652-68.329,68.328c0,4.418,3.582,8,8,8s8-3.582,8-8   c0-28.854,23.475-52.328,52.329-52.328c4.418,0,8-3.582,8-8S216.501,176.005,212.083,176.005z" />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export const TvIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      width="279.623px"
      height="279.623px"
      viewBox="0 0 279.623 279.623"
    >
      <g>
        <g>
          <path d="M279.623,36.258H0v177.685h279.623V36.258z M265.286,199.606H14.337V50.596h250.949V199.606z" />
          <path d="M228.444,236.196c0-3.958-3.211-7.169-7.169-7.169H57.494c-3.962,0-7.169,3.211-7.169,7.169    c0,3.962,3.207,7.168,7.169,7.168h163.782C225.233,243.364,228.444,240.158,228.444,236.196z" />
          <path d="M48.958,93.206h20.125c2.639,0,4.779,2.143,4.779,4.779v71.714c0,2.642,2.142,4.779,4.779,4.779h11.212    c2.637,0,4.779-2.138,4.779-4.779V97.985c0-2.637,2.14-4.779,4.779-4.779h19.991c2.637,0,4.779-2.14,4.779-4.779V80.5    c0-2.639-2.143-4.779-4.779-4.779H48.958c-2.637,0-4.779,2.14-4.779,4.779v7.927C44.178,91.066,46.32,93.206,48.958,93.206z" />
          <path d="M179.888,169.951c0.85,2.502,3.673,4.527,6.31,4.527h9.941c2.642,0,5.47-2.025,6.323-4.527l30.584-89.71    c0.854-2.5-0.598-4.521-3.229-4.521h-11.883c-2.642,0-5.376,2.054-6.104,4.593l-18.995,65.789c-0.728,2.539-1.909,2.539-2.632,0    l-18.813-65.785c-0.728-2.539-3.458-4.592-6.091-4.592H152.81c-2.642,0-4.098,2.025-3.253,4.525L179.888,169.951z" />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export const FridgeIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 463 463"
    >
      <g>
        <path d="M367.5,0h-272C86.953,0,80,6.953,80,15.5v432c0,8.547,6.953,15.5,15.5,15.5h272c8.547,0,15.5-6.953,15.5-15.5v-432   C383,6.953,376.047,0,367.5,0z M95,447.5v-432c0-0.276,0.224-0.5,0.5-0.5H200v433H95.5C95.224,448,95,447.776,95,447.5z M368,447.5   c0,0.276-0.224,0.5-0.5,0.5H215V15h152.5c0.276,0,0.5,0.224,0.5,0.5V447.5z" />
        <path d="M175.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176   C183,139.358,179.642,136,175.5,136z" />
        <path d="M239.5,136c-4.142,0-7.5,3.358-7.5,7.5v176c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-176   C247,139.358,243.642,136,239.5,136z" />
        <path d="M151.5,184h-40c-4.142,0-7.5,3.358-7.5,7.5v80c0,4.142,3.358,7.5,7.5,7.5h40c4.142,0,7.5-3.358,7.5-7.5v-80   C159,187.358,155.642,184,151.5,184z M144,199v9h-25v-9H144z M119,264v-41h25v41H119z" />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
