import React from 'react'
import PatikaIcon from '../constants/icons/patikaIcon';
import PatikaShapeSmall from '../constants/icons/patikaShapeSmall';
import PatikaShapeLarge from '../constants/icons/patikaShapeLarge';


function Patika() {
    return (
        <div className='patika-container'>
            <div className='padding-container'>
                <PatikaIcon />
                <div className='patika-title'>YAZILIM PATİKALARI</div>
                <div className='content-container'>
                    <div className='content'>
                        Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir.
                        Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler
                        kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar.
                        Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı
                        olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
                    </div>
                </div>
                <div className='shape-container'>
                    <PatikaShapeSmall />
                    <div className='patika-shape-large'><PatikaShapeLarge /></div>
                </div>
            </div>
        </div>
    )
}

export default Patika;