window.BENCHMARK_DATA = {
  "lastUpdate": 1630648492440,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "a7c8bb2d32de45e47de1d94febb0d9459efb5411",
          "message": ":bug: Fix CLI-conditional dependency rendering",
          "timestamp": "2021-09-03T05:48:46Z",
          "tree_id": "a3d29b1c318458d9bf028f402a17975a1a07e7e8"
        },
        "date": 1630648490053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14443.779793118352,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357834305272609",
            "extra": "mean: 69.23395498430706 usec\nrounds: 10352"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4363067.415649936,
            "unit": "iter/sec",
            "range": "stddev: 4.412252893452641e-7",
            "extra": "mean: 229.19655020996944 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12928.19988894711,
            "unit": "iter/sec",
            "range": "stddev: 0.00008664938473474006",
            "extra": "mean: 77.35028918101308 usec\nrounds: 8818"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 142287.92334992584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016068771877277071",
            "extra": "mean: 7.02800333617014 usec\nrounds: 35969"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15606.180788502304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008913138175611809",
            "extra": "mean: 64.07717644388305 usec\nrounds: 13245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4480021.890746412,
            "unit": "iter/sec",
            "range": "stddev: 5.3226679056059106e-8",
            "extra": "mean: 223.21319502168924 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}