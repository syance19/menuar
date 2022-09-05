import { mount } from "enzyme"
import { PrivateRoute } from '../../routers/PrivateRoute'
import {MemoryRouter} from 'react-router-dom'
describe('Pruebas en Private Route', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    test('debe de mostrar el componente si esta logeado y guarda en el local', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isLogged={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>

        );
        expect(wrapper.find('span').exists()).toBe(true);
    })

})
