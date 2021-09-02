window.BENCHMARK_DATA = {
  "lastUpdate": 1630621493672,
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
          "id": "57475a55b814a4edb149c0304ade8aef29c36fce",
          "message": "Merge pull request #315 from TeoZosa/make-adr-support-optional\n\n💥 Make Architecture Decision Records Support Optional",
          "timestamp": "2021-09-02T22:18:27Z",
          "tree_id": "e654f396d540779c27981ad5e31ec31292097468"
        },
        "date": 1630621491415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14948.327223434693,
            "unit": "iter/sec",
            "range": "stddev: 0.000026476177499265603",
            "extra": "mean: 66.89711731974175 usec\nrounds: 9700"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4501521.7926652,
            "unit": "iter/sec",
            "range": "stddev: 4.599663096257406e-7",
            "extra": "mean: 222.14709737262166 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12315.540978002859,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004598778683009",
            "extra": "mean: 81.19821953303787 usec\nrounds: 4669"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131127.3996879703,
            "unit": "iter/sec",
            "range": "stddev: 0.000009833749137078872",
            "extra": "mean: 7.626171207387564 usec\nrounds: 22832"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14884.02201796224,
            "unit": "iter/sec",
            "range": "stddev: 0.00005364768078402426",
            "extra": "mean: 67.18614086926144 usec\nrounds: 5821"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4105530.333688121,
            "unit": "iter/sec",
            "range": "stddev: 2.6893603492550265e-7",
            "extra": "mean: 243.57389148829876 nsec\nrounds: 48781"
          }
        ]
      }
    ]
  }
}