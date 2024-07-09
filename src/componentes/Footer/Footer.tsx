import style from './Footer.module.css';

const Footer= () => {
    return (
       <div>
        <div className={style.navbar}>
        <div className={style.nav_item}>
          <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_2521_154)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7309 18.3763L22.6339 18.8668C21.7155 18.6851 20.8617 18.3238 20.1107 17.821L20.3889 17.4055L20.667 16.99C20.0123 16.5517 19.4483 15.9877 19.01 15.333L18.5945 15.6111L18.179 15.8893C17.6762 15.1383 17.3149 14.2845 17.1332 13.3661L17.6237 13.2691L18.1142 13.1721C18.0394 12.7938 18 12.402 18 12C18 11.598 18.0394 11.2062 18.1142 10.8279L17.6237 10.7309L17.1332 10.6339C17.3149 9.7155 17.6762 8.86173 18.179 8.11069L18.5945 8.38885L19.01 8.66701C19.4483 8.01227 20.0123 7.44835 20.667 7.01001L20.3889 6.59453L20.1107 6.17905C20.8617 5.67623 21.7155 5.31492 22.6339 5.13324L22.7309 5.62373L22.8279 6.11423C23.2062 6.03939 23.598 6 24 6C24.402 6 24.7938 6.03939 25.1721 6.11423L25.2691 5.62373L25.3661 5.13324C26.2845 5.31492 27.1383 5.67623 27.8893 6.17904L27.6111 6.59453L27.333 7.01001C27.9877 7.44835 28.5517 8.01227 28.99 8.66701L29.4055 8.38885L29.821 8.11069C30.3397 8.88551 30.7078 9.76966 30.8835 10.7213C30.8781 10.6921 30.8725 10.6629 30.8668 10.6339L30.3763 10.7309L29.8858 10.8279C29.9606 11.2062 30 11.598 30 12C30 12.402 29.9606 12.7938 29.8858 13.1721L30.3763 13.2691L30.8668 13.3661C30.6851 14.2845 30.3238 15.1383 29.821 15.8893L29.4055 15.6111L28.99 15.333C28.5517 15.9877 27.9877 16.5517 27.333 16.99L27.6111 17.4055L27.8893 17.821C27.1383 18.3238 26.2845 18.6851 25.3661 18.8668L25.2691 18.3763L25.1721 17.8858C24.7938 17.9606 24.402 18 24 18C23.598 18 23.2062 17.9606 22.8279 17.8858L22.7309 18.3763ZM24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20ZM26.0831 8.87139C26.1262 8.68496 25.9129 8.56185 25.773 8.69236C25.1189 9.30243 23.8897 10.5044 23.217 11.5154C23.0946 11.6993 22.9597 11.9234 22.8339 12.1411C22.5596 12.6158 22.7348 13.2164 23.2095 13.4905C23.6843 13.7646 24.292 13.616 24.566 13.1411C24.6916 12.9233 24.8182 12.6944 24.9163 12.4965C25.4555 11.4084 25.8818 9.74288 26.0831 8.87139Z" fill="white"/>
            <path d="M8.01406 27.3633V33H10.0023C11.682 33 12.6703 31.9531 12.6703 30.1719C12.6703 28.3945 11.6781 27.3633 10.0023 27.3633H8.01406ZM8.88906 28.1172H9.92031C11.1117 28.1172 11.7758 28.8516 11.7758 30.1797C11.7758 31.5117 11.1156 32.2422 9.92031 32.2422H8.88906V28.1172ZM14.2539 28.2266C14.5234 28.2266 14.7383 28.0078 14.7383 27.7422C14.7383 27.4727 14.5234 27.2578 14.2539 27.2578C13.9844 27.2578 13.7656 27.4727 13.7656 27.7422C13.7656 28.0078 13.9844 28.2266 14.2539 28.2266ZM13.832 33H14.6758V28.8906H13.832V33ZM15.8648 30.0547C15.8648 30.6523 16.2516 31.0273 17.0328 31.207L17.7008 31.3633C18.15 31.4648 18.3023 31.6211 18.3023 31.8867C18.3023 32.2227 17.9898 32.4336 17.482 32.4336C16.9664 32.4336 16.6734 32.2227 16.5953 31.793H15.7594C15.8375 32.5742 16.4547 33.0781 17.482 33.0781C18.4508 33.0781 19.15 32.5625 19.15 31.8125C19.15 31.2188 18.8297 30.8906 17.9898 30.6953L17.3219 30.543C16.8766 30.4414 16.6891 30.2656 16.6891 30.0078C16.6891 29.6797 16.9938 29.457 17.4508 29.457C17.9234 29.457 18.2164 29.707 18.2633 30.1055H19.0563C19.0289 29.3477 18.4078 28.8164 17.4508 28.8164C16.5055 28.8164 15.8648 29.3203 15.8648 30.0547ZM23.7336 30.3047C23.6594 29.4961 23.0148 28.8164 21.9562 28.8164C20.7883 28.8164 20.0227 29.6406 20.0227 30.9453C20.0227 32.2734 20.7883 33.0781 21.9641 33.0781C22.9523 33.0781 23.6516 32.4844 23.7414 31.6094H22.9289C22.8312 32.0859 22.4914 32.3711 21.9719 32.3711C21.3156 32.3711 20.882 31.8477 20.882 30.9453C20.882 30.0625 21.3117 29.5195 21.9641 29.5195C22.5148 29.5195 22.843 29.8672 22.9289 30.3047H23.7336ZM26.5047 33.0781C27.6805 33.0781 28.4539 32.2695 28.4539 30.9453C28.4539 29.625 27.6766 28.8164 26.5047 28.8164C25.3328 28.8164 24.5555 29.625 24.5555 30.9453C24.5555 32.2695 25.3289 33.0781 26.5047 33.0781ZM26.5047 32.3828C25.8445 32.3828 25.4148 31.8594 25.4148 30.9453C25.4148 30.0352 25.8445 29.5117 26.5047 29.5117C27.1648 29.5117 27.5945 30.0352 27.5945 30.9453C27.5945 31.8594 27.1688 32.3828 26.5047 32.3828ZM32.9047 28.8906H32.0219L30.9906 32.1758H30.975L29.9438 28.8906H29.0453L30.5258 33H31.432L32.9047 28.8906ZM36.3945 31.793C36.2812 32.1523 35.9258 32.3945 35.4453 32.3945C34.7695 32.3945 34.3398 31.9219 34.3398 31.207V31.1562H37.2422V30.8672C37.2422 29.6211 36.5312 28.8164 35.3906 28.8164C34.2305 28.8164 33.4883 29.6758 33.4883 30.9648C33.4883 32.2617 34.2188 33.0781 35.4258 33.0781C36.3672 33.0781 37.0781 32.543 37.1953 31.793H36.3945ZM35.3906 29.4961C35.9805 29.4961 36.3789 29.9375 36.3984 30.5664H34.3438C34.3867 29.9453 34.8008 29.4961 35.3906 29.4961ZM38.2984 33H39.1422V30.5391C39.1422 29.957 39.4781 29.5938 40.0211 29.5938C40.1852 29.5938 40.3336 29.6133 40.4 29.6406V28.8555C40.3375 28.8438 40.232 28.8242 40.1109 28.8242C39.6266 28.8242 39.2594 29.1094 39.1227 29.5898H39.1031V28.8906H38.2984V33Z" fill="#EEEEEE"/>
            </g>
            <defs>
            <clipPath id="clip0_2521_154">
            <rect width="48" height="36" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        
      </div>
      <div className="nav-item">
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_2521_91)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.14522V6H26V6.38889C26 6.66503 26.2239 6.88889 26.5 6.88889C26.7761 6.88889 27 6.66503 27 6.38889V6H32V8.14522C30.5543 8.57574 29.5 9.91377 29.5 11.5C29.5 13.0862 30.5543 14.4243 32 14.8548V17H27V16.6111C27 16.335 26.7761 16.1111 26.5 16.1111C26.2239 16.1111 26 16.335 26 16.6111V17H16V14.8548C17.4457 14.4243 18.5 13.0862 18.5 11.5C18.5 9.91377 17.4457 8.57574 16 8.14522ZM26.5 18H15.5C15.2239 18 15 17.7761 15 17.5V14.5C15 14.2239 15.2261 14.0052 15.4968 13.9506C16.6395 13.7202 17.5 12.7106 17.5 11.5C17.5 10.2894 16.6395 9.27976 15.4968 9.04936C15.2261 8.99478 15 8.77614 15 8.5V5.5C15 5.22386 15.2239 5 15.5 5H26.5H32.5C32.7761 5 33 5.22386 33 5.5V8.5C33 8.77614 32.7739 8.99478 32.5032 9.04936C31.3605 9.27976 30.5 10.2894 30.5 11.5C30.5 12.7106 31.3605 13.7202 32.5032 13.9506C32.7739 14.0052 33 14.2239 33 14.5V17.5C33 17.7761 32.7761 18 32.5 18H26.5ZM26 14.3889C26 14.665 26.2239 14.8889 26.5 14.8889C26.7761 14.8889 27 14.665 27 14.3889V12.6111C27 12.335 26.7761 12.1111 26.5 12.1111C26.2239 12.1111 26 12.335 26 12.6111V14.3889ZM26 10.3889C26 10.665 26.2239 10.8889 26.5 10.8889C26.7761 10.8889 27 10.665 27 10.3889V8.61111C27 8.33497 26.7761 8.11111 26.5 8.11111C26.2239 8.11111 26 8.33497 26 8.61111V10.3889Z" fill="white"/>
            <path d="M13.1438 33V28.1172H14.8664V27.3633H10.5422V28.1172H12.2688V33H13.1438ZM16.1414 28.2266C16.4109 28.2266 16.6258 28.0078 16.6258 27.7422C16.6258 27.4727 16.4109 27.2578 16.1414 27.2578C15.8719 27.2578 15.6531 27.4727 15.6531 27.7422C15.6531 28.0078 15.8719 28.2266 16.1414 28.2266ZM15.7195 33H16.5633V28.8906H15.7195V33ZM21.3539 30.3047C21.2797 29.4961 20.6352 28.8164 19.5766 28.8164C18.4086 28.8164 17.643 29.6406 17.643 30.9453C17.643 32.2734 18.4086 33.0781 19.5844 33.0781C20.5727 33.0781 21.2719 32.4844 21.3617 31.6094H20.5492C20.4516 32.0859 20.1117 32.3711 19.5922 32.3711C18.9359 32.3711 18.5023 31.8477 18.5023 30.9453C18.5023 30.0625 18.932 29.5195 19.5844 29.5195C20.1352 29.5195 20.4633 29.8672 20.5492 30.3047H21.3539ZM23.2422 30.6523H23.2344V27.3633H22.3906V33H23.2344V31.5234L23.5859 31.1758L24.9805 33H25.9609L24.1914 30.6602L25.8945 28.8906H24.9023L23.2422 30.6523ZM29.3258 31.793C29.2125 32.1523 28.857 32.3945 28.3766 32.3945C27.7008 32.3945 27.2711 31.9219 27.2711 31.207V31.1562H30.1734V30.8672C30.1734 29.6211 29.4625 28.8164 28.3219 28.8164C27.1617 28.8164 26.4195 29.6758 26.4195 30.9648C26.4195 32.2617 27.15 33.0781 28.357 33.0781C29.2984 33.0781 30.0094 32.543 30.1266 31.793H29.3258ZM28.3219 29.4961C28.9117 29.4961 29.3102 29.9375 29.3297 30.5664H27.275C27.318 29.9453 27.732 29.4961 28.3219 29.4961ZM31.4758 27.918V28.8906H30.8781V29.5586H31.4758V31.918C31.4758 32.7109 31.8 33.0273 32.632 33.0273C32.8195 33.0273 33.007 33.0117 33.1008 32.9883V32.3203C33.0461 32.332 32.9094 32.3398 32.8234 32.3398C32.4797 32.3398 32.3234 32.1797 32.3234 31.8242V29.5586H33.1047V28.8906H32.3234V27.918H31.4758ZM34.1258 30.0547C34.1258 30.6523 34.5125 31.0273 35.2938 31.207L35.9617 31.3633C36.4109 31.4648 36.5633 31.6211 36.5633 31.8867C36.5633 32.2227 36.2508 32.4336 35.743 32.4336C35.2273 32.4336 34.9344 32.2227 34.8563 31.793H34.0203C34.0984 32.5742 34.7156 33.0781 35.743 33.0781C36.7117 33.0781 37.4109 32.5625 37.4109 31.8125C37.4109 31.2188 37.0906 30.8906 36.2508 30.6953L35.5828 30.543C35.1375 30.4414 34.95 30.2656 34.95 30.0078C34.95 29.6797 35.2547 29.457 35.7117 29.457C36.1844 29.457 36.4773 29.707 36.5242 30.1055H37.3172C37.2898 29.3477 36.6688 28.8164 35.7117 28.8164C34.7664 28.8164 34.1258 29.3203 34.1258 30.0547Z" fill="#EEEEEE"/>
            </g>
            <defs>
            <clipPath id="clip0_2521_91">
            <rect width="48" height="36" fill="white"/>
            </clipPath>
            </defs>
            </svg>

      </div>
      <div className="nav-item">
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_2521_172)">
            <path d="M24.4111 19.7614L24.825 20.0419L24.4111 19.7614ZM23.5889 19.7614L23.175 20.0419H23.175L23.5889 19.7614ZM28.5 8.54545C28.5 9.86086 28.4986 10.8995 27.9549 12.4408C27.403 14.0052 26.2848 16.1041 23.9971 19.481L24.825 20.0419C27.1262 16.645 28.3025 14.4611 28.8979 12.7735C29.5014 11.0629 29.5 9.88044 29.5 8.54545H28.5ZM24 4.5C26.5312 4.5 28.5 6.35499 28.5 8.54545H29.5C29.5 5.71515 26.9917 3.5 24 3.5V4.5ZM19.5 8.54545C19.5 6.35499 21.4688 4.5 24 4.5V3.5C21.0083 3.5 18.5 5.71515 18.5 8.54545H19.5ZM24.0029 19.481C21.7152 16.1041 20.597 14.0052 20.0451 12.4408C19.5014 10.8995 19.5 9.86086 19.5 8.54545H18.5C18.5 9.88044 18.4986 11.0629 19.1021 12.7735C19.6975 14.4611 20.8738 16.645 23.175 20.0419L24.0029 19.481ZM23.9971 19.481C23.9963 19.4822 23.9962 19.482 23.997 19.4813C23.9978 19.4807 23.9987 19.4801 23.9995 19.4796C24.001 19.4789 24.0012 19.4792 24 19.4792C23.9988 19.4792 23.999 19.4789 24.0005 19.4796C24.0013 19.4801 24.0022 19.4807 24.003 19.4813C24.0038 19.482 24.0037 19.4822 24.0029 19.481L23.175 20.0419C23.57 20.6249 24.43 20.6249 24.825 20.0419L23.9971 19.481ZM25.7727 9C25.7727 9.97905 24.9791 10.7727 24 10.7727V11.7727C25.5313 11.7727 26.7727 10.5313 26.7727 9H25.7727ZM24 7.22727C24.9791 7.22727 25.7727 8.02095 25.7727 9H26.7727C26.7727 7.46867 25.5313 6.22727 24 6.22727V7.22727ZM22.2273 9C22.2273 8.02095 23.0209 7.22727 24 7.22727V6.22727C22.4687 6.22727 21.2273 7.46867 21.2273 9H22.2273ZM24 10.7727C23.0209 10.7727 22.2273 9.97905 22.2273 9H21.2273C21.2273 10.5313 22.4687 11.7727 24 11.7727V10.7727Z" fill="white"/>
            <path d="M10.0336 33V28.1172H11.7563V27.3633H7.43203V28.1172H9.15859V33H10.0336ZM12.8008 33H13.6445V30.625C13.6445 29.9766 14.0273 29.5469 14.6523 29.5469C15.2461 29.5469 15.5508 29.9102 15.5508 30.5156V33H16.3984V30.3516C16.3984 29.4219 15.8594 28.8203 14.957 28.8203C14.332 28.8203 13.8828 29.0977 13.6562 29.5781H13.6367V27.3633H12.8008V33ZM20.3375 31.793C20.2242 32.1523 19.8688 32.3945 19.3883 32.3945C18.7125 32.3945 18.2828 31.9219 18.2828 31.207V31.1562H21.1852V30.8672C21.1852 29.6211 20.4742 28.8164 19.3336 28.8164C18.1734 28.8164 17.4313 29.6758 17.4313 30.9648C17.4313 32.2617 18.1617 33.0781 19.3688 33.0781C20.3102 33.0781 21.0211 32.543 21.1383 31.793H20.3375ZM19.3336 29.4961C19.9234 29.4961 20.3219 29.9375 20.3414 30.5664H18.2867C18.3297 29.9453 18.7438 29.4961 19.3336 29.4961ZM23.4445 33.0703C23.9836 33.0703 24.5031 32.7812 24.7414 32.3242H24.7609V33H25.5695V30.168C25.5695 29.3438 24.9328 28.8164 23.9367 28.8164C22.9211 28.8164 22.2883 29.3633 22.2414 30.1055H23.0383C23.1125 29.7383 23.4172 29.5039 23.9055 29.5039C24.4211 29.5039 24.7297 29.7773 24.7297 30.2344V30.5508L23.6047 30.6172C22.6281 30.6719 22.0773 31.1133 22.0773 31.832C22.0773 32.5703 22.6398 33.0703 23.4445 33.0703ZM23.6789 32.4023C23.2258 32.4023 22.9289 32.168 22.9289 31.8086C22.9289 31.457 23.2141 31.2344 23.718 31.1992L24.7297 31.1367V31.4609C24.7297 31.9961 24.2687 32.4023 23.6789 32.4023ZM27.0359 27.918V28.8906H26.4383V29.5586H27.0359V31.918C27.0359 32.7109 27.3602 33.0273 28.1922 33.0273C28.3797 33.0273 28.5672 33.0117 28.6609 32.9883V32.3203C28.6063 32.332 28.4695 32.3398 28.3836 32.3398C28.0398 32.3398 27.8836 32.1797 27.8836 31.8242V29.5586H28.6648V28.8906H27.8836V27.918H27.0359ZM32.3813 31.793C32.268 32.1523 31.9125 32.3945 31.432 32.3945C30.7563 32.3945 30.3266 31.9219 30.3266 31.207V31.1562H33.2289V30.8672C33.2289 29.6211 32.518 28.8164 31.3773 28.8164C30.2172 28.8164 29.475 29.6758 29.475 30.9648C29.475 32.2617 30.2055 33.0781 31.4125 33.0781C32.3539 33.0781 33.0648 32.543 33.182 31.793H32.3813ZM31.3773 29.4961C31.9672 29.4961 32.3656 29.9375 32.3852 30.5664H30.3305C30.3734 29.9453 30.7875 29.4961 31.3773 29.4961ZM34.2852 33H35.1289V30.5391C35.1289 29.957 35.4648 29.5938 36.0078 29.5938C36.1719 29.5938 36.3203 29.6133 36.3867 29.6406V28.8555C36.3242 28.8438 36.2188 28.8242 36.0977 28.8242C35.6133 28.8242 35.2461 29.1094 35.1094 29.5898H35.0898V28.8906H34.2852V33ZM37.2359 30.0547C37.2359 30.6523 37.6227 31.0273 38.4039 31.207L39.0719 31.3633C39.5211 31.4648 39.6734 31.6211 39.6734 31.8867C39.6734 32.2227 39.3609 32.4336 38.8531 32.4336C38.3375 32.4336 38.0445 32.2227 37.9664 31.793H37.1305C37.2086 32.5742 37.8258 33.0781 38.8531 33.0781C39.8219 33.0781 40.5211 32.5625 40.5211 31.8125C40.5211 31.2188 40.2008 30.8906 39.3609 30.6953L38.693 30.543C38.2477 30.4414 38.0602 30.2656 38.0602 30.0078C38.0602 29.6797 38.3648 29.457 38.8219 29.457C39.2945 29.457 39.5875 29.707 39.6344 30.1055H40.4273C40.4 29.3477 39.7789 28.8164 38.8219 28.8164C37.8766 28.8164 37.2359 29.3203 37.2359 30.0547Z" fill="#EEEEEE"/>
            </g>
            <defs>
            <clipPath id="clip0_2521_172">
            <rect width="48" height="36" fill="white"/>
            </clipPath>
            </defs>
            </svg>

      </div>
      <div className="nav-item">
            <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_2521_178)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9999 8C26.9999 9.65685 25.6568 11 23.9999 11C22.3431 11 20.9999 9.65685 20.9999 8C20.9999 6.34315 22.3431 5 23.9999 5C25.6568 5 26.9999 6.34315 26.9999 8ZM26.1392 11.3805C27.2576 10.6713 27.9999 9.42232 27.9999 8C27.9999 5.79086 26.2091 4 23.9999 4C21.7908 4 19.9999 5.79086 19.9999 8C19.9999 9.42232 20.7423 10.6713 21.8607 11.3805C19.1738 12.365 17.194 15.1542 17.0134 18.4998C16.9985 18.7756 17.2269 19 17.503 19H23.9999H30.4976C30.7738 19 31.0013 18.7756 30.9865 18.4998C30.8059 15.1542 28.826 12.365 26.1392 11.3805ZM23.9999 12C26.9207 12 29.5146 14.5082 29.9394 18H29.9381H29.9162H29.8944H29.8728H29.8512H29.8298H29.8085H29.7872H29.7661H29.7451H29.7242H29.7034H29.6827H29.6621H29.6417H29.6213H29.601H29.5809H29.5608H29.5409H29.521H29.5013H29.4816H29.4621H29.4426H29.4233H29.404H29.3849H29.3658H29.3469H29.328H29.3093H29.2906H29.2721H29.2536H29.2353H29.217H29.1988H29.1808H29.1628H29.1449H29.1271H29.1094H29.0918H29.0743H29.0568H29.0395H29.0223H29.0051H28.9881H28.9711H28.9542H28.9374H28.9207H28.9041H28.8876H28.8711H28.8548H28.8385H28.8223H28.8062H28.7902H28.7743H28.7585H28.7427H28.727H28.7114H28.6959H28.6805H28.6652H28.6499H28.6347H28.6196H28.6046H28.5896H28.5748H28.56H28.5453H28.5306H28.5161H28.5016H28.4872H28.4728H28.4586H28.4444H28.4303H28.4163H28.4023H28.3884H28.3746H28.3609H28.3472H28.3336H28.3201H28.3067H28.2933H28.28H28.2667H28.2535H28.2404H28.2274H28.2144H28.2015H28.1887H28.1759H28.1632H28.1506H28.138H28.1255H28.113H28.1006H28.0883H28.0761H28.0639H28.0517H28.0397H28.0276H28.0157H28.0038H27.992H27.9802H27.9685H27.9568H27.9452H27.9337H27.9222H27.9108H27.8994H27.8881H27.8768H27.8656H27.8545H27.8434H27.8323H27.8213H27.8104H27.7995H27.7887H27.7779H27.7671H27.7565H27.7458H27.7352H27.7247H27.7142H27.7038H27.6934H27.6831H27.6728H27.6625H27.6523H27.6422H27.632H27.622H27.612H27.602H27.592H27.5821H27.5723H27.5625H27.5527H27.543H27.5333H27.5237H27.5141H27.5045H27.495H27.4855H27.476H27.4666H27.4572H27.4479H27.4386H27.4293H27.4201H27.4109H27.4018H27.3926H27.3835H27.3745H27.3655H27.3565H27.3475H27.3386H27.3297H27.3208H27.312H27.3032H27.2944H27.2856H27.2769H27.2682H27.2596H27.2509H27.2423H27.2337H27.2252H27.2166H27.2081H27.1996H27.1912H27.1827H27.1743H27.1659H27.1576H27.1492H27.1409H27.1326H27.1243H27.1161H27.1078H27.0996H27.0914H27.0832H27.075H27.0669H27.0587H27.0506H27.0425H27.0344H27.0264H27.0183H27.0103H27.0023H26.9942H26.9862H26.9783H26.9703H26.9623H26.9544H26.9464H26.9385H26.9306H26.9227H26.9148H26.9069H26.899H26.8911H26.8833H26.8754H26.8676H26.8597H26.8519H26.844H26.8362H26.8284H26.8206H26.8127H26.8049H26.7971H26.7893H26.7815H26.7737H26.7659H26.7581H26.7503H26.7425H26.7347H26.7269H26.719H26.7112H26.7034H26.6956H26.6878H26.68H26.6721H26.6643H26.6565H26.6486H26.6408H26.6329H26.625H26.6172H26.6093H26.6014H26.5935H26.5856H26.5777H26.5698H26.5618H26.5539H26.5459H26.538H26.53H26.522H26.514H26.506H26.4979H26.4899H26.4818H26.4737H26.4656H26.4575H26.4494H26.4413H26.4331H26.4249H26.4167H26.4085H26.4003H26.392H26.3838H26.3755H26.3671H26.3588H26.3504H26.3421H26.3337H26.3252H26.3168H26.3083H26.2998H26.2913H26.2827H26.2742H26.2656H26.2569H26.2483H26.2396H26.2309H26.2222H26.2134H26.2046H26.1958H26.1869H26.178H26.1691H26.1602H26.1512H26.1422H26.1331H26.124H26.1149H26.1058H26.0966H26.0874H26.0781H26.0688H26.0595H26.0502H26.0408H26.0313H26.0219H26.0124H26.0028H25.9932H25.9836H25.9739H25.9642H25.9545H25.9447H25.9348H25.925H25.915H25.9051H25.8951H25.885H25.8749H25.8648H25.8546H25.8444H25.8341H25.8238H25.8134H25.803H25.7925H25.782H25.7714H25.7608H25.7502H25.7395H25.7287H25.7179H25.707H25.6961H25.6851H25.6741H25.663H25.6519H25.6407H25.6295H25.6182H25.6068H25.5954H25.584H25.5724H25.5609H25.5492H25.5375H25.5258H25.514H25.5021H25.4902H25.4782H25.4661H25.454H25.4419H25.4296H25.4173H25.405H25.3925H25.3801H25.3675H25.3549H25.3422H25.3295H25.3167H25.3038H25.2908H25.2778H25.2647H25.2516H25.2384H25.2251H25.2117H25.1983H25.1848H25.1712H25.1576H25.1439H25.1301H25.1163H25.1023H25.0883H25.0743H25.0601H25.0459H25.0316H25.0172H25.0028H24.9882H24.9736H24.959H24.9442H24.9294H24.9144H24.8995H24.8844H24.8692H24.854H24.8387H24.8233H24.8078H24.7922H24.7766H24.7609H24.7451H24.7292H24.7132H24.6971H24.681H24.6648H24.6484H24.632H24.6155H24.599H24.5823H24.5655H24.5487H24.5318H24.5147H24.4976H24.4804H24.4631H24.4457H24.4283H24.4107H24.393H24.3753H24.3574H24.3395H24.3214H24.3033H24.2851H24.2667H24.2483H24.2298H24.2112H24.1925H24.1737H24.1548H24.1358H24.1167H24.0975H24.0782H24.0587H24.0392H24.0196H23.9999H23.9782H23.9567H23.9352H23.9138H23.8926H23.8714H23.8504H23.8294H23.8086H23.7879H23.7672H23.7467H23.7263H23.706H23.6857H23.6656H23.6456H23.6257H23.6059H23.5861H23.5665H23.547H23.5276H23.5082H23.489H23.4699H23.4508H23.4319H23.4131H23.3943H23.3757H23.3571H23.3387H23.3203H23.302H23.2838H23.2657H23.2477H23.2298H23.212H23.1943H23.1766H23.1591H23.1416H23.1243H23.107H23.0898H23.0727H23.0557H23.0388H23.0219H23.0052H22.9885H22.9719H22.9554H22.939H22.9227H22.9064H22.8902H22.8742H22.8582H22.8422H22.8264H22.8106H22.795H22.7794H22.7639H22.7484H22.7331H22.7178H22.7026H22.6875H22.6724H22.6574H22.6425H22.6277H22.613H22.5983H22.5837H22.5692H22.5548H22.5404H22.5261H22.5119H22.4977H22.4836H22.4696H22.4557H22.4418H22.428H22.4143H22.4006H22.387H22.3735H22.36H22.3466H22.3333H22.3201H22.3069H22.2938H22.2807H22.2677H22.2548H22.2419H22.2291H22.2164H22.2037H22.1911H22.1785H22.166H22.1536H22.1412H22.1289H22.1167H22.1045H22.0924H22.0803H22.0683H22.0563H22.0444H22.0326H22.0208H22.0091H21.9974H21.9858H21.9742H21.9627H21.9512H21.9398H21.9285H21.9172H21.9059H21.8947H21.8836H21.8725H21.8615H21.8505H21.8395H21.8286H21.8178H21.807H21.7963H21.7856H21.7749H21.7643H21.7537H21.7432H21.7327H21.7223H21.7119H21.7016H21.6913H21.6811H21.6709H21.6607H21.6506H21.6405H21.6305H21.6205H21.6105H21.6006H21.5907H21.5809H21.5711H21.5613H21.5516H21.5419H21.5323H21.5226H21.5131H21.5035H21.494H21.4845H21.4751H21.4657H21.4563H21.447H21.4377H21.4284H21.4192H21.41H21.4008H21.3916H21.3825H21.3734H21.3644H21.3553H21.3463H21.3374H21.3284H21.3195H21.3106H21.3017H21.2929H21.2841H21.2753H21.2665H21.2578H21.2491H21.2404H21.2317H21.2231H21.2144H21.2058H21.1973H21.1887H21.1802H21.1716H21.1631H21.1547H21.1462H21.1377H21.1293H21.1209H21.1125H21.1041H21.0958H21.0874H21.0791H21.0708H21.0625H21.0542H21.0459H21.0377H21.0294H21.0212H21.013H21.0047H20.9965H20.9884H20.9802H20.972H20.9638H20.9557H20.9475H20.9394H20.9313H20.9232H20.9151H20.9069H20.8988H20.8908H20.8827H20.8746H20.8665H20.8584H20.8503H20.8423H20.8342H20.8261H20.8181H20.81H20.8019H20.7939H20.7858H20.7778H20.7697H20.7616H20.7536H20.7455H20.7374H20.7294H20.7213H20.7132H20.7051H20.697H20.6889H20.6808H20.6727H20.6646H20.6565H20.6484H20.6402H20.6321H20.624H20.6158H20.6076H20.5994H20.5913H20.5831H20.5749H20.5666H20.5584H20.5502H20.5419H20.5336H20.5253H20.517H20.5087H20.5004H20.4921H20.4837H20.4753H20.4669H20.4585H20.4501H20.4417H20.4332H20.4247H20.4162H20.4077H20.3992H20.3906H20.382H20.3734H20.3648H20.3562H20.3475H20.3388H20.3301H20.3214H20.3126H20.3038H20.295H20.2862H20.2773H20.2684H20.2595H20.2506H20.2416H20.2326H20.2236H20.2146H20.2055H20.1964H20.1872H20.1781H20.1688H20.1596H20.1504H20.1411H20.1317H20.1224H20.113H20.1035H20.0941H20.0846H20.075H20.0655H20.0559H20.0462H20.0365H20.0268H20.0171H20.0073H19.9974H19.9876H19.9777H19.9677H19.9577H19.9477H19.9376H19.9275H19.9174H19.9072H19.8969H19.8866H19.8763H19.8659H19.8555H19.8451H19.8346H19.824H19.8134H19.8028H19.7921H19.7814H19.7706H19.7597H19.7489H19.7379H19.7269H19.7159H19.7048H19.6937H19.6825H19.6713H19.66H19.6487H19.6373H19.6258H19.6143H19.6028H19.5912H19.5795H19.5678H19.556H19.5442H19.5323H19.5203H19.5083H19.4963H19.4842H19.472H19.4597H19.4475H19.4351H19.4227H19.4102H19.3977H19.3851H19.3724H19.3597H19.3469H19.334H19.3211H19.3081H19.2951H19.282H19.2688H19.2556H19.2423H19.2289H19.2154H19.2019H19.1883H19.1747H19.161H19.1472H19.1333H19.1194H19.1054H19.0914H19.0772H19.063H19.0487H19.0344H19.0199H19.0054H18.9909H18.9762H18.9615H18.9467H18.9318H18.9168H18.9018H18.8867H18.8715H18.8563H18.8409H18.8255H18.81H18.7944H18.7788H18.763H18.7472H18.7313H18.7153H18.6992H18.6831H18.6669H18.6506H18.6342H18.6177H18.6011H18.5845H18.5677H18.5509H18.534H18.517H18.4999H18.4827H18.4655H18.4481H18.4307H18.4132H18.3955H18.3778H18.36H18.3421H18.3242H18.3061H18.2879H18.2697H18.2513H18.2329H18.2143H18.1957H18.177H18.1582H18.1392H18.1202H18.1011H18.0819H18.0626H18.0604C18.4853 14.5082 21.0791 12 23.9999 12Z" fill="white"/>
            <path d="M12.4758 33H13.4016L11.3664 27.3633H10.4211L8.38594 33H9.29609L9.81172 31.4766H11.9602L12.4758 33ZM10.8742 28.3008H10.8977L11.7375 30.7734H10.0344L10.8742 28.3008ZM17.7391 30.3047C17.6648 29.4961 17.0203 28.8164 15.9617 28.8164C14.7938 28.8164 14.0281 29.6406 14.0281 30.9453C14.0281 32.2734 14.7938 33.0781 15.9695 33.0781C16.9578 33.0781 17.657 32.4844 17.7469 31.6094H16.9344C16.8367 32.0859 16.4969 32.3711 15.9773 32.3711C15.3211 32.3711 14.8875 31.8477 14.8875 30.9453C14.8875 30.0625 15.3172 29.5195 15.9695 29.5195C16.5203 29.5195 16.8484 29.8672 16.9344 30.3047H17.7391ZM22.2719 30.3047C22.1977 29.4961 21.5531 28.8164 20.4945 28.8164C19.3266 28.8164 18.5609 29.6406 18.5609 30.9453C18.5609 32.2734 19.3266 33.0781 20.5023 33.0781C21.4906 33.0781 22.1898 32.4844 22.2797 31.6094H21.4672C21.3695 32.0859 21.0297 32.3711 20.5102 32.3711C19.8539 32.3711 19.4203 31.8477 19.4203 30.9453C19.4203 30.0625 19.85 29.5195 20.5023 29.5195C21.0531 29.5195 21.3813 29.8672 21.4672 30.3047H22.2719ZM25.043 33.0781C26.2188 33.0781 26.9922 32.2695 26.9922 30.9453C26.9922 29.625 26.2148 28.8164 25.043 28.8164C23.8711 28.8164 23.0938 29.625 23.0938 30.9453C23.0938 32.2695 23.8672 33.0781 25.043 33.0781ZM25.043 32.3828C24.3828 32.3828 23.9531 31.8594 23.9531 30.9453C23.9531 30.0352 24.3828 29.5117 25.043 29.5117C25.7031 29.5117 26.1328 30.0352 26.1328 30.9453C26.1328 31.8594 25.707 32.3828 25.043 32.3828ZM31.568 28.8906H30.7242V31.2852C30.7242 31.9258 30.357 32.3477 29.7477 32.3477C29.1656 32.3477 28.8688 32.0117 28.8688 31.3867V28.8906H28.025V31.5508C28.025 32.4922 28.5719 33.0742 29.4664 33.0742C30.0953 33.0742 30.5133 32.7969 30.7398 32.3047H30.7594V33H31.568V28.8906ZM32.8039 33H33.6477V30.6055C33.6477 29.9688 34.0305 29.5469 34.6242 29.5469C35.2102 29.5469 35.4992 29.8867 35.4992 30.5039V33H36.3469V30.3398C36.3469 29.3984 35.8273 28.8203 34.9211 28.8203C34.2883 28.8203 33.8508 29.1094 33.6281 29.5781H33.6086V28.8906H32.8039V33ZM37.8094 27.918V28.8906H37.2117V29.5586H37.8094V31.918C37.8094 32.7109 38.1336 33.0273 38.9656 33.0273C39.1531 33.0273 39.3406 33.0117 39.4344 32.9883V32.3203C39.3797 32.332 39.243 32.3398 39.157 32.3398C38.8133 32.3398 38.657 32.1797 38.657 31.8242V29.5586H39.4383V28.8906H38.657V27.918H37.8094Z" fill="#EEEEEE"/>
            </g>
            <defs>
            <clipPath id="clip0_2521_178">
            <rect width="48" height="36" fill="white"/>
            </clipPath>
            </defs>
            </svg>

        </div>
    </div>
</div>
    
    
);


}
export default Footer;