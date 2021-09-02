window.BENCHMARK_DATA = {
  "lastUpdate": 1630617439736,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "239a51a5ae80bd5e97a95723f171aaf6ecd1a6ec",
          "message": "Merge pull request #314 from TeoZosa/make-adr-support-optional\n\n💥 Make Architecture Decision Records Support Optional",
          "timestamp": "2021-09-02T21:10:57Z",
          "tree_id": "0a7f58f0d89bc780f44be1f0c6368705a8ac2741"
        },
        "date": 1630617437613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14352.148968601887,
            "unit": "iter/sec",
            "range": "stddev: 0.00007886769736789716",
            "extra": "mean: 69.67597689988406 usec\nrounds: 8355"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3829343.7359562255,
            "unit": "iter/sec",
            "range": "stddev: 4.26504593260251e-7",
            "extra": "mean: 261.141351874529 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12235.54827413582,
            "unit": "iter/sec",
            "range": "stddev: 0.00013952155003007802",
            "extra": "mean: 81.72907152136823 usec\nrounds: 6907"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114658.25425103205,
            "unit": "iter/sec",
            "range": "stddev: 0.00001437708240803005",
            "extra": "mean: 8.721570082609198 usec\nrounds: 41494"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13705.45188516983,
            "unit": "iter/sec",
            "range": "stddev: 0.0001994469347415555",
            "extra": "mean: 72.96366499831089 usec\nrounds: 7391"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3758562.1471656053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011781567162695321",
            "extra": "mean: 266.05918988351056 nsec\nrounds: 175439"
          }
        ]
      }
    ]
  }
}