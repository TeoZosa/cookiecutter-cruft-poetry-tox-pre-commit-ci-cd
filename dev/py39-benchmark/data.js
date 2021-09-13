window.BENCHMARK_DATA = {
  "lastUpdate": 1631551574227,
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
          "id": "0f2795d201365b5951823e84e784e01849312782",
          "message": ":construction_worker: Update test instance template initialization parameters",
          "timestamp": "2021-09-13T16:39:55Z",
          "tree_id": "74a94b61b8592e1956fce794468ec522b3810a70"
        },
        "date": 1631551571235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14964.368884138798,
            "unit": "iter/sec",
            "range": "stddev: 0.000018546477566596662",
            "extra": "mean: 66.82540424808234 usec\nrounds: 12240"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 2092272.492340035,
            "unit": "iter/sec",
            "range": "stddev: 4.455445013580057e-7",
            "extra": "mean: 477.949217255914 nsec\nrounds: 3387"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12592.211345151385,
            "unit": "iter/sec",
            "range": "stddev: 0.000021639047646396188",
            "extra": "mean: 79.41416901210515 usec\nrounds: 8313"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115725.0732280074,
            "unit": "iter/sec",
            "range": "stddev: 0.000005820739962643468",
            "extra": "mean: 8.641169731902 usec\nrounds: 44641"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15044.711590764751,
            "unit": "iter/sec",
            "range": "stddev: 0.000014590283207906466",
            "extra": "mean: 66.46853905885797 usec\nrounds: 7988"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943288.8957989863,
            "unit": "iter/sec",
            "range": "stddev: 2.0220477005178962e-7",
            "extra": "mean: 253.59541905877444 nsec\nrounds: 44445"
          }
        ]
      }
    ]
  }
}