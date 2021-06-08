window.BENCHMARK_DATA = {
  "lastUpdate": 1623176643151,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "0baadd2f2c09623932bc61509d215c165462259d",
          "message": ":construction_worker: Remove deprecated `GITHUB_TOKEN` field\n\nsee: https://github.com/JamesIves/github-pages-deploy-action/releases/tag/4.0.0",
          "timestamp": "2021-06-08T18:18:59Z",
          "tree_id": "da3e1b81aa0f5aec008e8037c827cb9249ac83a8"
        },
        "date": 1623176641132,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13143.568214165274,
            "unit": "iter/sec",
            "range": "stddev: 0.0001777101691721159",
            "extra": "mean: 76.08284019268571 usec\nrounds: 8091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4351815.101307005,
            "unit": "iter/sec",
            "range": "stddev: 5.590109801700228e-7",
            "extra": "mean: 229.78917456746495 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12845.60224489095,
            "unit": "iter/sec",
            "range": "stddev: 0.00004677946088546724",
            "extra": "mean: 77.84765407925717 usec\nrounds: 7918"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138766.9207876729,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016918556983162369",
            "extra": "mean: 7.20632838376589 usec\nrounds: 36232"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15287.153459156665,
            "unit": "iter/sec",
            "range": "stddev: 0.000060854632295298744",
            "extra": "mean: 65.414401881406 usec\nrounds: 13606"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4496705.841830729,
            "unit": "iter/sec",
            "range": "stddev: 7.884011589943357e-7",
            "extra": "mean: 222.38501587046173 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}