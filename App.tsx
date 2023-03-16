import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb18ba',
    title: 'Código de Conduta',
    cover: 'https://capas-m.imagemfilmes.com.br/148096_000_m.jpg',
    sinopse: 'Clyde (Gerard Butler) é um dedicado pai de família que testemunha sua esposa e filha serem assassinadas.',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Conexão Escobar',
    cover: 'https://capas-m.imagemfilmes.com.br/164485_000_m.jpg',
    sinopse: 'A verdadeira história de um homem contra o maior cartel de drogas do mundo.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'De Volta Ao Jogo',
    cover: 'https://capas-m.imagemfilmes.com.br/164389_000_m.jpg',
    sinopse: 'Agora é pessoal.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Quando Te Conheci',
    cover: 'https://capas-m.imagemfilmes.com.br/164405_000_m.jpg',
    sinopse: 'Silas (Nicholas Hoult) vive em uma sociedade onde seus habitantes foram geneticamente concebidos para não ter emoções.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'A Profecia do Mal',
    cover: 'https://capas-m.imagemfilmes.com.br/164091_000_m.jpg',
    sinopse: 'Uma poderosa empresa de biotecnologia faz uma descoberta de ponta, permitindo a clonagem de pessoas a partir de meros fragmentos de DNA, inclusive figuras históricas.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'O Poder e a Lei',
    cover: 'https://capas-m.imagemfilmes.com.br/103356_000_m.jpg',
    sinopse: 'Michael Haller (Matthew McConaughey) é um advogado que roda pela cidade farejando novas oportunidades de ganhar dinheiro.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Viver Sem Endereço',
    cover: 'https://capas-m.imagemfilmes.com.br/164463_000_m.jpg',
    sinopse: 'Dois moradores de rua, Tahir ( Anthony Mackie) e Hannah (Jennifer Connely) vivem em Nova York rodeados por perigos e incertezas.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-144571e29d75',
    title: 'O Cavaleiro sem Cabeça e a Abóbora Assombrada',
    cover: 'https://capas-m.imagemfilmes.com.br/105522_000_m.jpg',
    sinopse: 'Eles têm até a meia-noite do Dia das Bruxas para vencer a maldição do Cavaleiro sem Cabeça.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Bruna Surfistinha',
    cover: 'https://capas-m.imagemfilmes.com.br/103693_000_m.jpg',
    sinopse: 'Bruna Surfistinha conta a história da jovem Raquel (Deborah Secco), filha de classe média paulistana que um dia sai de casa e toma uma decisão surpreendente'
  }
];

type ItemProps = {item: any};

const Item = ({item}: ItemProps) => (
  <View style={styles.listItem}>
    <Image source={{uri: item.cover}} style={{width:90, height:120, marginRight:15, borderRadius:5}}  />
    <View style={{alignItems:"flex-start",flex:1}}>
      <Text style={{fontWeight:"bold"}}>{item.title} </Text>
      <Text style={{marginTop:6}}>{item.sinopse} </Text>
    </View>
  </View>
);

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },
  listItem:{
		backgroundColor: '#F6F6F6',
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 6,
		flexDirection: "row",
		elevation: 4,
		shadowColor: '#000',
		shadowOffset: {
				width: 0,
				height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
  }
});

export default App;