(ns drugsfromdirt.db)

;;;---- Basic DB ----------------
(def dbstart {:countdata  [{:samplename "DFD_1128.1",
                            :Longitude  -73.9185,
                            :Latitude   40.5879,
                            :totalreads 50095,
                            :countdata  {:A40926       0,
                                         :A47934       63,
                                         :A54145       0,
                                         :actinomycin  0,
                                         :aculeximycin 0}
                            :size       5}
                           {:samplename "DFD_1128.1",
                            :Longitude  -73.8185,
                            :Latitude   40.7879,
                            :totalreads 50095,
                            :countdata  {:A40926       0,
                                         :A47934       63,
                                         :A54145       0,
                                         :actinomycin  0,
                                         :aculeximycin 0}
                            :size       5}]

              :molecules [:A40926
                          :A47934
                          :A54145
                          :actinomycin
                          :aculeximycin]

              :activemolecule nil
              :activesample nil
              :top-level-navigation nil
              :normalized true
              :activemap "NYC"
              })
