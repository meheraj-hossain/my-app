import React from "react";
import {useData} from "vike-react/useData";
import type {Data} from "./+data.js";
import {Head} from "vike-react/Head";
import 'bootstrap/dist/css/bootstrap.min.css';

// @ts-ignore
export default function Content({data, currentContent}) {

    // @ts-ignore
    return (
        <>
            {data === currentContent &&
                <Head><title>{data.n_id}</title>
                    <meta httpEquiv={`${data.n_id}`} content={`${data.n_id}`}/>
                </Head>
            }

            <p className="py-5 border-bottom">
                {data.head}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et justo finibus, rutrum lorem ac, porta
                lectus.
                Integer neque erat, fermentum vel dapibus eget, pulvinar ut orci. Vivamus faucibus placerat ullamcorper.
                Nulla
                luctus tristique libero, sit amet fringilla ligula pretium id. Vivamus vitae sapien odio. Integer vel
                ultrices quam,
                euismod porttitor metus. Vestibulum eget nunc tincidunt, tincidunt mi vitae, tincidunt nulla. Cras sit
                amet lectus
                ac velit porta fringilla. Nunc aliquam velit in purus feugiat ultricies. Aenean arcu dolor, rutrum vitae
                luctus non,
                accumsan eu mi. Nam sed justo viverra, malesuada neque ac, rutrum elit. Phasellus viverra placerat
                commodo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.

                Praesent at tincidunt lacus. Aenean sit amet faucibus lacus. Phasellus eget leo vitae est laoreet
                tincidunt. In orci
                est, ullamcorper id efficitur eu, commodo non erat. Mauris gravida nibh sit amet nisi tempus maximus.
                Praesent
                dictum erat aliquet hendrerit malesuada. Ut condimentum egestas lectus id pharetra. Orci varius natoque
                penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus.
                Sed varius augue tortor. Maecenas finibus dui ac euismod gravida. Morbi at imperdiet arcu.

                Quisque iaculis odio nibh, id consectetur felis sagittis sit amet. Ut diam erat, maximus id posuere sit
                amet,
                egestas id sapien. Sed lacinia nisi non lorem viverra, eget pellentesque mi dapibus. Suspendisse eget
                tellus
                molestie, eleifend urna non, maximus turpis. Nam scelerisque nulla id est auctor, vitae dictum turpis
                malesuada. Ut
                posuere sed tortor ac sodales. Nulla sapien magna, viverra vel ante vestibulum, laoreet pretium enim.
                Suspendisse
                lobortis tellus eget enim efficitur sollicitudin.

                Etiam elit quam, imperdiet et tellus eu, pretium malesuada ipsum. Duis a pharetra odio, sed rhoncus est.
                Aenean
                augue velit, lacinia ac orci volutpat, eleifend euismod ipsum. Pellentesque finibus sed turpis quis
                efficitur.
                Nullam condimentum pretium pulvinar. Quisque ac sagittis enim, eget consequat lectus. Orci varius
                natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pretium ultrices tortor, vel
                porttitor leo
                pretium eget. Integer eget venenatis nisl, nec sodales neque. Curabitur ultrices faucibus euismod. Class
                aptent
                taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit
                amet,
                consectetur adipiscing elit. Aliquam porttitor hendrerit est, id semper elit. Vivamus interdum rhoncus
                tincidunt.
                Cras eleifend mi nec ullamcorper sagittis. Donec convallis metus vitae porta ullamcorper.

                Proin pharetra felis eget metus sollicitudin iaculis. Aenean sed nibh non nisi faucibus congue. Morbi ac
                leo augue.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae magna
                id dolor
                sollicitudin dignissim viverra at odio. Morbi sodales eros at ante lacinia ultrices. Sed tristique
                semper ornare. In
                hac habitasse platea dictumst.

                Vestibulum scelerisque varius auctor. Aliquam hendrerit dolor nec purus sollicitudin eleifend. Aliquam
                arcu risus,
                bibendum eu velit nec, suscipit scelerisque tortor. Sed metus velit, tempor eget auctor id, iaculis non
                odio. Nam
                sed volutpat odio, et iaculis erat. Nullam quam risus, porttitor at tortor ac, consequat consequat
                felis. Ut non
                turpis varius odio pretium porta eget at diam. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra,
                per inceptos himenaeos. Nunc quam ante, cursus at urna eu, fermentum interdum quam. Nullam malesuada,
                neque eget
                ornare vestibulum, enim tortor egestas dui, eget luctus tortor ligula condimentum sem. Pellentesque
                sodales dui at
                tortor ullamcorper, et ultrices augue consequat. Nulla fermentum molestie eros eu dignissim. Aliquam
                erat volutpat.

                Maecenas vulputate ac dui ut sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                commodo purus
                sed faucibus maximus. Maecenas sagittis lectus sed mollis fringilla. Vivamus eget tempus nisi, quis
                dapibus risus.
                Nulla ut ligula nec nisi mattis mattis. In ultrices quam odio, eu tempor arcu tempus eget. Pellentesque
                bibendum
                enim quis dui ultrices feugiat. Aliquam mollis felis ut iaculis egestas. Etiam imperdiet nisi at posuere
                tristique.
                Morbi dictum leo nec eros malesuada, et porttitor tortor egestas. Phasellus dictum nunc elementum odio
                interdum
                molestie.

                Cras accumsan, erat tristique bibendum ullamcorper, tellus urna ullamcorper sapien, eu aliquet lectus
                ligula in
                justo. Etiam viverra eros id blandit viverra. Aliquam nec dapibus eros, id gravida nulla. In finibus
                velit est, at
                luctus augue posuere ut. In hac habitasse platea dictumst. Pellentesque lacinia pretium orci, tristique
                malesuada
                urna finibus vitae. Nulla vel odio mauris. Proin odio arcu, bibendum in gravida vehicula, faucibus vel
                lectus.
                Quisque vehicula vel ipsum ac luctus. Fusce eleifend dapibus venenatis. Phasellus sollicitudin sapien
                quis sodales
                maximus. Duis consequat quam nec purus sodales, a semper nisi faucibus. Aenean at eros dui. Phasellus et
                iaculis
                justo, id sodales ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos
                himenaeos.

                In efficitur est sapien, eu porttitor sem feugiat sit amet. Praesent libero nulla, laoreet non maximus
                sit amet,
                suscipit vulputate odio. Sed finibus placerat mauris, eget consequat nisl gravida vitae. Cras quam sem,
                suscipit nec
                molestie a, dictum et sem. Mauris at quam ac tortor efficitur vestibulum eget ac mi. Maecenas eget
                consectetur nunc.
                Suspendisse at semper erat. Integer pretium, tellus nec scelerisque tempor, dui lectus ultricies massa,
                vitae
                scelerisque turpis dolor sed libero. Duis hendrerit lobortis ligula, ac dictum arcu tempor luctus.
                Quisque ac nunc
                in augue faucibus facilisis a a ipsum. Aliquam varius tellus sagittis pellentesque porttitor. Donec
                eleifend ac enim
                a pellentesque. Proin vitae ligula ligula. Mauris gravida lacus ac ipsum placerat, volutpat commodo
                neque finibus.
                Nulla consequat eu sapien interdum dignissim.

                Maecenas porttitor viverra felis eu vulputate. Vivamus nec eros risus. Sed vulputate fringilla augue vel
                dapibus.
                Quisque vel est vel nisi gravida pulvinar. Aliquam finibus nulla neque, ut pulvinar arcu venenatis
                laoreet. In
                blandit auctor auctor. Vestibulum eu turpis id nibh laoreet dignissim eget vel ante. Pellentesque
                ullamcorper nunc
                eget felis sodales convallis. Cras congue imperdiet orci, nec eleifend urna facilisis ac. Nam cursus,
                dui at
                pulvinar mattis, quam lectus lacinia augue, a rhoncus neque eros ac dui. Donec consectetur aliquet
                rutrum.
                Suspendisse vitae porta erat, in facilisis diam. Suspendisse varius, nibh nec vehicula condimentum,
                risus ligula
                mattis urna, consectetur dapibus lectus nisl eu tellus. Mauris faucibus auctor urna, ac mollis lacus
                sodales sed.

                Integer porttitor turpis nec laoreet accumsan. Integer a mattis diam. Sed ac velit eget ligula tincidunt
                sagittis
                vel eget est. Nullam commodo nulla quis ipsum ullamcorper elementum. Pellentesque consequat blandit
                velit, et
                pellentesque purus iaculis ut. Curabitur luctus, massa sit amet malesuada rutrum, nunc nisi faucibus
                neque, id
                rhoncus dolor justo sed justo. Phasellus in ex in erat volutpat eleifend id vel nisi. Aliquam vehicula
                consequat
                mauris maximus eleifend.

                Ut rhoncus tincidunt elit sit amet vestibulum. Vivamus bibendum, neque sit amet faucibus lobortis, magna
                erat
                placerat dolor, et semper nisi odio aliquam urna. Curabitur viverra ullamcorper urna, a efficitur mi
                cursus ut. Cras
                mollis, nibh ut dignissim imperdiet, nulla leo tincidunt risus, sed imperdiet enim arcu vitae libero.
                Quisque at
                vehicula ante. Donec nunc nunc, pharetra eleifend lorem vitae, semper ultrices elit. Donec a nulla eget
                mauris
                porttitor semper nec vel arcu. Fusce non lorem purus. Phasellus ut magna non nunc blandit gravida ornare
                non libero.
                Donec eu finibus lectus, ut finibus est. Etiam vitae justo lectus.

                Nunc vel tincidunt elit. Phasellus varius ex a consectetur faucibus. Sed rutrum molestie enim, sed
                mollis dui
                molestie vitae. Etiam ex justo, accumsan sed leo accumsan, ullamcorper dapibus mauris. Ut purus libero,
                ornare non
                erat nec, ultricies pulvinar sapien. Donec ultricies feugiat dui, non dignissim metus mattis faucibus.
                Nullam
                venenatis ex vitae mi imperdiet viverra. In vitae interdum sem. Donec commodo vel leo quis finibus.
                Fusce ac est
                varius, porta turpis a, ultrices orci. Duis dapibus ut urna ac tempus.

                Nulla commodo viverra nisi pharetra rhoncus. Nunc pretium at massa quis egestas. Sed ut diam a mi
                ullamcorper
                aliquet eget nec libero. Ut varius feugiat urna et volutpat. Nulla rutrum laoreet dui, vitae volutpat
                sapien. Mauris
                id vulputate turpis. Vivamus urna mi, tincidunt in lectus ut, auctor viverra dui. Suspendisse malesuada
                et ipsum ut
                varius.

                In sodales erat eu felis eleifend, sed tincidunt metus facilisis. Phasellus quis massa id dui blandit
                efficitur.
                Proin tincidunt tortor luctus lacus ultricies, sed semper dolor placerat. Proin hendrerit ex ex, a
                vulputate sem
                dignissim et. Etiam ante eros, pharetra sed finibus vitae, mollis vel lacus. Donec sagittis est elit,
                non tristique
                mi suscipit non. Aenean gravida aliquet ipsum, sit amet semper diam elementum vitae. Ut maximus varius
                maximus.

                Sed elit leo, condimentum in ultrices quis, rhoncus id orci. Mauris sit amet sem semper, euismod tortor
                in,
                fermentum libero. Ut ultricies eu ex a pellentesque. Phasellus non lacus ac mauris placerat consequat
                aliquet
                vulputate nibh. Aliquam metus lectus, mattis quis consectetur et, consectetur eu lectus. Aenean ut
                volutpat orci.
                Aliquam pellentesque eu lorem in lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Praesent at
                posuere dolor. Aliquam commodo luctus sapien. Nam pharetra nulla justo, eget auctor massa sagittis
                vitae. Maecenas
                mattis posuere nibh ac aliquam. Donec augue dui, venenatis ac quam in, viverra lobortis augue.

                Proin ut pulvinar metus. Praesent bibendum consectetur nisl, id hendrerit tortor ornare vitae. Integer
                pharetra
                dapibus nulla gravida rhoncus. Quisque non diam eu sapien condimentum gravida. Suspendisse potenti.
                Donec fermentum
                nulla non nisi luctus, a bibendum nulla suscipit. Sed mi lorem, vestibulum sed justo ut, gravida
                tincidunt massa.
                Donec consequat dolor id justo interdum consequat. Nullam nec eleifend arcu, in laoreet tortor.
                Pellentesque
                bibendum luctus tortor, ut accumsan nisi elementum a. Curabitur pharetra dolor quis pulvinar rhoncus.

                Mauris viverra nisl suscipit, luctus dolor mollis, interdum nulla. Aenean non blandit nisi, at lobortis
                nisl.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
                blandit ipsum
                augue, ut hendrerit erat sodales vel. Quisque eu neque vel metus ullamcorper fermentum. Donec id
                facilisis justo.
                Fusce sed tincidunt dolor. Nam pharetra, massa sed euismod tempor, magna mauris tincidunt massa, sed
                laoreet urna
                tellus a felis. Vivamus mollis, diam a luctus ultrices, nisl tortor condimentum elit, ut tincidunt risus
                nunc vel
                arcu. Nulla a mattis diam. Duis elementum tincidunt dolor quis faucibus. Phasellus viverra vitae tortor
                ac semper.

                Proin pretium sem nisl, et aliquet enim luctus vitae. Vestibulum sed tellus ac ante iaculis condimentum.
                Nulla
                facilisi. Nulla sed semper magna, sed posuere augue. Aliquam suscipit dui sed ante commodo volutpat.
                Morbi quis
                semper erat. Sed laoreet velit sed mauris venenatis tempus. Proin dapibus lectus ut eros tincidunt,
                viverra congue
                nunc lobortis. Nullam congue lorem ex, non maximus leo iaculis sed. Fusce nec lacus imperdiet, aliquet
                arcu id,
                dictum massa. Donec vel rutrum dui. Nam nulla justo, consequat non sollicitudin nec, suscipit iaculis
                sapien.
                Vivamus ac faucibus massa. Phasellus sodales quis quam eget convallis. Phasellus a nulla a elit maximus
                eleifend.

                Praesent sed libero lectus. Aliquam suscipit mi in vulputate scelerisque. Phasellus suscipit
                sollicitudin nisi ac
                ornare. Duis dignissim dolor ac consectetur auctor. Nunc luctus massa condimentum, commodo eros ut,
                accumsan massa.
                Aenean condimentum ac velit eget porta. Integer facilisis sit amet risus sed varius. Nam sapien libero,
                bibendum at
                orci laoreet, rutrum eleifend metus. Donec velit erat, mollis feugiat accumsan eget, pulvinar interdum
                ligula.
            </p>
        </>
    );
}