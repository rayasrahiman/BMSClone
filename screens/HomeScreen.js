import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  movies,
  advertisement,
  events,
  liveEvents,
  premierMovies,
} from '../redux/movieSlice';
import SubHeader from '../components/SubHeader';
import HeaderBanner from '../components/HeaderBanner';
import StaticBanner from '../components/StaticBanner';
import MoviesComp from '../components/MoviesComp';
import EventsComp from '../components/EventsComp';
import EventsScrollComp from '../components/EventsScrollComp';
import CardComp from '../components/CardComp';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const moviesArr = useSelector(state => state.movies.moviesArr);
  const advertisementArr = useSelector(
    state => state.advertisement.advertisementArr,
  );
  const eventsArr = useSelector(state => state.events.eventsArr);
  const liveEventsArr = useSelector(state => state.liveEvents.liveEventsArr);
  const premierMoviesArr = useSelector(
    state => state.premierMovies.premierMoviesArr,
  );

  useEffect(() => {
    dispatch(movies, advertisement, events, liveEvents, premierMovies);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SubHeader />
        <HeaderBanner data={advertisementArr} />
        <StaticBanner />
        <MoviesComp data={moviesArr} />
        <StaticBanner />
        <EventsComp
          data={eventsArr}
          title="The Best Events this week"
          subtitle="Monday to sunday we got you covered"
        />
        <EventsComp
          data={eventsArr}
          title="Ultimate Events List"
          subtitle="Good times outdoor or at home"
        />
        <StaticBanner
          container={{marginHorizontal: 0, marginVertical: 0, marginTop: 30}}
          imgCont={{height: 80}}
        />
        <CardComp data={premierMoviesArr} buttonText="Buy or Rent" />
        <EventsScrollComp
          data={liveEventsArr}
          title="Best of Live Events"
          subtitle="Step out or stay in, interesting experiences for everyone"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
